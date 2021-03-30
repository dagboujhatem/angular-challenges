import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  submitted = false;
  productID;
  addProductForm : FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required, Validators.min(0)]),
    price: new FormControl('', [Validators.required, Validators.min(2)]),
    createdAt: new FormControl(''),
    updatedAt: new FormControl('')
  });
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productID = this.activatedRoute.params['id'];
    this.loadProductData();
  }

  loadProductData() {
    // First step : patch product info in the form.
    // Second step : update the updatedAt 
  }


  saveProduct()
  {
    this.submitted = false;
    if(this.addProductForm.invalid)
    {
      return; 
    }

    console.log(this.addProductForm.value);
    this.router.navigateByUrl('/customers');
  }

}
