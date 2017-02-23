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
  selector: 'form-ngmodel',
  template: `
    <div class="ui raised segment">
       <h2 class="ui header">Form with Ng-Model validation</h2>
       <div class="ui info message">The product name is: {{productName}}</div>
       <form class="ui form"
              [formGroup]="myForm6"
              (ngSubmit)="onSubmit(myForm6.value)">
        
          <div class="field"
            [class.error]="!myForm6.controls.productName.valid && myForm6.controls.productName.touched">
            
            <label for="productNameInput">Product Name</label>
            <input type="text"
                   id="productNameInput"
                   placeholder="Product Name"
                   [formControl]="myForm6.get('productName')"
                   [(ngModel)]='productName'> 
                   
             <div *ngIf="!myForm6.controls.productName.valid"
                  class="ui error message">Rroduct Name is invalid</div>
                  
             <div *ngIf="myForm6.controls.productName.hasError('required')"
                  class="ui error message">SKU is required</div>
          </div>
          
           <div *ngIf="!myForm6.valid"
                  class="ui error message">Form is invalid</div>

          
          <button class="ui button positive" type="submit">Send</button>
        </form>
    </div>
  `
})
export class FormNgmodelValidation {
  myForm6: FormGroup;
  productName: string;

  constructor(fb: FormBuilder) {
    this.myForm6 = fb.group({
      'productName': ['', Validators.required]
    });
  }

  onSubmit(value: string): void {
    console.log('Form with validation submitted value: ', value);
  }
}