import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { FormAdminComponent } from './form-admin/form-admin.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { GuestModule } from '../guest/guest.module';



@NgModule({
  declarations: [
    AdminComponent,
    FormAdminComponent,
    ListarUsuariosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    GuestModule,
  ],
  exports:[
    AdminComponent,
    FormAdminComponent
  ]
})
export class AdminModule { }
