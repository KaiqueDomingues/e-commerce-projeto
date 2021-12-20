import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FormAdminComponent } from './form-admin/form-admin.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent},
  {path: 'admin/new', component: FormAdminComponent},
  {path: 'admin/:id', component: FormAdminComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
