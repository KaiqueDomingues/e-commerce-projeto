import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGuestComponent } from '../guest/form-guest/form-guest.component';
import { AdminComponent } from './admin/admin.component';
import { FormAdminComponent } from './form-admin/form-admin.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'admin/usuario/editar/:id', component: FormGuestComponent},
  {path: 'admin/usuario', component: ListarUsuariosComponent},
  {path: 'admin/new', component: FormAdminComponent},
  {path: 'admin/:id', component: FormAdminComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
