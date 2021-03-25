import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CustomersComponent, AddCustomerComponent, UpdateCustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ]
})
export class CustomersModule { }
