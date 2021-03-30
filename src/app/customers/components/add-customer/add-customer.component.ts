import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  submitted = false;
  addProductForm : FormGroup = new FormGroup({
    id: new FormControl(uuid()),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required, Validators.min(0)]),
    price: new FormControl('', [Validators.required, Validators.min(2)]),
    createdAt: new FormControl(new Date()),
    updatedAt: new FormControl(new Date())
  });
  constructor(private router: Router) { }

  ngOnInit(): void {
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
