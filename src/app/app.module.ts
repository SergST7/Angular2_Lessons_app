import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';


import { AppComponent }  from './app.component';
import { FormsList }  from './forms/forms-list.component';
import { FormSCU}  from './forms/form-scu.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    FormsList,
    FormSCU
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
