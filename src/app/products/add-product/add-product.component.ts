import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuid } from 'uuid';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  submitted = false;
  addProductForm: FormGroup = new FormGroup({
    id: new FormControl(uuid()),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(8)]),
    quantity: new FormControl('', [Validators.required, Validators.min(0)]),
  });
  constructor(private productService:ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  saveProduct()
  {
    this.submitted = true;
    if(this.addProductForm.invalid)
    {
      return ;
    }

    this.productService.addProduct(this.addProductForm.value);
    this.router.navigate(['/list-products'])

  }

}
