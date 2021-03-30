import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { SharedModule } from '../shared/shared.module';
import { UpdateDialogComponent } from './components/dialog/update-dialog/update-dialog.component';
import { DeleteConfirmDialogComponent } from './components/dialog/delete-confirm-dialog/delete-confirm-dialog.component';


@NgModule({
  declarations: [CustomersComponent, AddCustomerComponent, UpdateCustomerComponent, UpdateDialogComponent, DeleteConfirmDialogComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ]
})
export class CustomersModule { }
