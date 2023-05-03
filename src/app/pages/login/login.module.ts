import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from '../customers/customers/customers.component';
const route : Routes = [
  {
    path : "",
    component : LoginComponent

  },
  {
    path : "customers",
    component : CustomersComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent

  ],
  imports: [
    CommonModule,
    
    RouterModule.forChild(route)
  ]
})
export class LoginModule { }
