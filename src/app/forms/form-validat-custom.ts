/**
 * Created by SergST on 23.02.2017.
 */

import {Component} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: 'form-validation-custom',
  template: `
    <div class="ui raised segment">
       <h2 class="ui header">Form with custom validation</h2>
       <form class="ui form"
              [formGroup]="myForm4"
              (ngSubmit)="onSubmit(myForm4.value)">
        
          <div class="field"
            [class.error]="!sku.valid && sku.touched">
            
            <label for="inputSKU">SKU</label>
            <input type="text"
                   id="inputSKU"
                   placeholder="SKU"
                   [formControl]="sku"> 
                   
             <div *ngIf="!sku.valid"
                  class="ui error message">SKU is invalid</div>
                  
             <div *ngIf="sku.hasError('required')"
                  class="ui error message">SKU is required</div>
          </div>
          
           <div *ngIf="!myForm4.valid"
                  class="ui error message">Form is invalid</div>

          
          <button class="ui button positive" type="submit">Send</button>
        </form>
    </div>
  `
})
export class FormCustomValidation {
  myForm4: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm4 = fb.group({
      'sku': ['', Validators.required]
    });
    this.sku = this.myForm4.controls['sku']
  }

  onSubmit(value: string): void {
    console.log('Form with custom validation submitted value: ', value);
  }
}