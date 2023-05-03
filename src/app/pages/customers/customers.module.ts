import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { Routes, RouterModule } from "@angular/router";
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { VerifyCustomerComponent } from './verify-customer/verify-customer.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes : Routes = [
  {
    path : "",
    component : CustomersComponent
    
  }
]

@NgModule({
  declarations: [
    CustomersComponent,
    EditCustomerComponent,
    AddCustomerComponent,
    VerifyCustomerComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CustomersModule { }
