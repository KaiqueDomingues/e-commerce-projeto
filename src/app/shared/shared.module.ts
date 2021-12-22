import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FieldErrorComponent } from './componentes/field-error/field-error.component';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    FieldErrorComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FieldErrorComponent,
  ]
})
export class SharedModule { }
