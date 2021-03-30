import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  submitted = false;
  productID: any;
  updateProductForm : FormGroup;
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.updateProductForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required, Validators.min(0)]),
      price: new FormControl('', [Validators.required, Validators.min(2)]),
      createdAt: new FormControl(''),
      updatedAt: new FormControl('')
    });
    this.productID = this.activatedRoute.snapshot.params['id'];
    this.loadProductData();
  }

  loadProductData() {
    // First step : patch product info in the form.
    this.productsService.getOneProductById(this.productID).subscribe((response)=>{
          this.updateProductForm.patchValue(response);
          // Second step : update the updatedAt 
          this.updateProductForm.get('updatedAt').setValue(new Date());
    }, (error)=>{
        console.log(error);        
    });    
  }


  updateProduct()
  {
    this.submitted = false;
    if(this.updateProductForm.invalid)
    {
      return; 
    }

    this.productsService.updateProductById(this.productID, this.updateProductForm.value).subscribe((response)=>{
      this.router.navigateByUrl('/customers');
      this.snackBar.open("Product updated successfully!", "Done", {duration: 2000});
    }, (error)=>{
        console.log(error);        
    });
  }

}
