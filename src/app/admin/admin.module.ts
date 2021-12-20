import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { FormAdminComponent } from './form-admin/form-admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    FormAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ],
  exports:[
    AdminComponent
  ]
})
export class AdminModule { }
