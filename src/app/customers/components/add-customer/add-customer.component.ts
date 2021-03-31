import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  addProductForm : FormGroup;
  constructor(private router: Router,
     private productsService: ProductsService,
     private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addProductForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required, Validators.min(0)]),
      price: new FormControl('', [Validators.required, Validators.min(2)]),
      createdAt: new FormControl(new Date()),
      updatedAt: new FormControl(new Date())
    });
  }

  saveProduct()
  {
    if(this.addProductForm.invalid)
    {
      return; 
    }

    this.productsService.addProduct(this.addProductForm.value).subscribe((response)=>{
      this.router.navigateByUrl('/customers');
      this.snackBar.open("Product saved successfully!", "Done", {duration: 2000});
    }, (error)=>{
        console.log(error);        
    });
    
  }

}
