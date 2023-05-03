import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { ViewComplainsComponent } from './view-complains/view-complains.component';
import { ViewDatabaseComponent } from './view-database/view-database.component';



@NgModule({
  declarations: [
    AdminComponent,
    ViewComplainsComponent,
    ViewDatabaseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
