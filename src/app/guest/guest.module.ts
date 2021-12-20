import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestComponent } from './guest/guest.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GuestComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    SharedModule
  ],
  exports:[
    GuestComponent
  ]
})
export class GuestModule { }
