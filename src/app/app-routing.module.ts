import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login/login.component';
import { HomeComponent } from './pages/home/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './pages/customers/customers/customers.component';
import { LoginModule } from './pages/login/login.module';
import { HomeModule } from './pages/home/home.module';
import { CustomersModule } from './pages/customers/customers.module';

const routes: Routes = [
  {
    path:"login",
    loadChildren : () => import('./pages/login/login.module').then(c => c.LoginModule)
  },
  {
    path:"",
    loadChildren : () => import('./pages/home/home.module').then(c => c.HomeModule)
    
  },
   {
    path:"customers",
    loadChildren : () => import('./pages/customers/customers.module').then(c => c.CustomersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    LoginModule,
    HomeModule,
    CustomersModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
