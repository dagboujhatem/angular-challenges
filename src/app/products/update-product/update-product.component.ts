import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  submitted = false;
  index: any;
  updateProductForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(8)]),
    quantity: new FormControl('', [Validators.required, Validators.min(0)]),
  });
  constructor(private router: Router, private activatedRoute:  ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {
    this.index = this.activatedRoute.snapshot.params['index'];
    let productData = this.productService.getProductByIndex(this.index);
    this.updateProductForm.patchValue(productData);
  }

  updateProduct()
  {
    this.submitted = true;
    if(this.updateProductForm.invalid)
    {
      return ;
    }

    // update 
    this.productService.updateProductDataByIndex(this.updateProductForm.value, this.index);
    // navigate to list of products 
    this.router.navigate(['/list-products']);
  }
}
