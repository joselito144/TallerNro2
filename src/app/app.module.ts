import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaskNumberDirective } from './directive/mask-number.directive';
import { MaskEmailDirective } from './directive/mask-email.directive';
import { MaskIdDirective } from './directive/mask-id.directive';

@NgModule({
  declarations: [
    AppComponent,
    MaskNumberDirective,
    MaskEmailDirective,
    MaskIdDirective
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule.withConfig({
      warnOnNgModelWithFormControl: 'never'
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
