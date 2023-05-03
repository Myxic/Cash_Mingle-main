import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';



@NgModule({
  declarations: [
    HomeComponent,
    TermsOfServiceComponent,
    PrivacypolicyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
