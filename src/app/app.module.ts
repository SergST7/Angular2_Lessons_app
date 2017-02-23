import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';


import { AppComponent }  from './app.component';

//My Components
import { FormsList }  from './forms/forms-list.component';
import { FormSCU}  from './forms/form-scu.component';
import { FormSKUBuilder }  from './forms/form-builder.component';
import { FormExplValidation }  from './forms/form-validat-expl';
import { FormCustomValidation }  from './forms/form-validat-custom';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    FormsList,
    FormSCU,
    FormSKUBuilder,
    FormExplValidation,
    FormCustomValidation
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
