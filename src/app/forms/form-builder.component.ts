/**
 * Created by SergST on 22.02.2017.
 */

import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup
} from "@angular/forms";

@Component({
  selector: 'form-sku-builder',
  template: `
    <div class="ui raised segment">
    <h2 class="ui header">Form with Builder</h2>
    <form [formGroup]="myForm2"
           class="ui form"
           (ngSubmit)="onSubmit(myForm2.value)">
           
      <div class="field">
            <label for="inputSKU">SKU</label>
            <input type="text"
                   id="inputSKU"
                   placeholder="SKU"
                   [formControl]="myForm2.controls['sku']"> 
          </div>
          
          <button class="ui button positive" type="submit">Send</button>
    
    </form>
    </div>
  `
})
export class FormSKUBuilder{
  myForm2: FormGroup;

  constructor(myBuilder: FormBuilder){
    this.myForm2 = myBuilder.group({
      'sku': ['abc123']
    })
  }

  onSubmit(value: string): void {
     console.log('Form builder submitted value: ', value);
  }
}