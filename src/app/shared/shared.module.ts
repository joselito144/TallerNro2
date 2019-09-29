import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleInputComponent } from './simple-input/simple-input.component';



@NgModule({
  declarations: [
    SimpleInputComponent
  ],
  exports: [
    SimpleInputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
