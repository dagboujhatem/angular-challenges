import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersComponent } from './customers.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'add', component: AddCustomerComponent },
  { path: 'update/:id', component: UpdateCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
