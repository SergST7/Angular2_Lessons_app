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
  selector: 'form-validation-events',
  template: `
    <div class="ui raised segment">
       <h2 class="ui header">Form with Events & validation</h2>
       <form class="ui form"
              [formGroup]="myForm5"
              (ngSubmit)="onSubmit(myForm5.value)">
        
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
          
           <div *ngIf="!myForm5.valid"
                  class="ui error message">Form is invalid</div>

          
          <button class="ui button positive" type="submit">Send</button>
        </form>
    </div>
  `
})
export class FormlValidationEvents {
  myForm5: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm5 = fb.group({
      'sku': ['', Validators.required]
    });
    this.sku = this.myForm5.controls['sku']

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to: ', value)
      }
    );

    this.myForm5.valueChanges.subscribe(
      (form: any) => {
        console.log('Form changed to: ', form)
      }
    )

  }

  onSubmit(value: string): void {
    console.log('Form with validation submitted value: ', value);
  }
}