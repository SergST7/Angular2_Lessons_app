import {Component} from "@angular/core";

@Component({
  selector: "form-scu",
  template: `
     <div class="ui raised segment">
        <h2 class="ui header">Demo Form SKU</h2>
        <form class="ui form"
              #myForm1="ngForm"
              (ngSubmit)="onSubmit(myForm1.value)">
        
          <div class="field">
            <label for="inputSKU">SKU</label>
            <input type="text"
                   id="inputSKU"
                   placeholder="SKU"
                   name="SKU"
                   ngModel> 
          </div>
          
          <button class="ui button positive" type="submit">Send</button>
        </form>
     </div>
  `
})
export class FormSCU {
  onSubmit(result: any): void{
    console.log('My value from Form1 :', result)
  }
}