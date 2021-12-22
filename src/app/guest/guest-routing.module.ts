import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGuestComponent } from './form-guest/form-guest.component';
import { GuestComponent } from './guest/guest.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'guest', component:GuestComponent},
  { path: 'login', component:LoginComponent},
  { path: 'guest/new', component:FormGuestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
