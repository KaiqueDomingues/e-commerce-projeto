import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestComponent } from './guest/guest.component';
import { SharedModule } from '../shared/shared.module';
import { FormGuestComponent } from './form-guest/form-guest.component';
import { LoginComponent } from '../auth/login/login.component';


@NgModule({
  declarations: [
    GuestComponent,
    FormGuestComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    SharedModule
  ],
  exports:[
    GuestComponent,
    FormGuestComponent
  ]
})
export class GuestModule { }
