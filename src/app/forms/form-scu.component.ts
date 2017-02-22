import {Component} from "@angular/core";

@Component({
  selector: "form-scu",
  template: `
     <h2>Demo form will be here..</h2>
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
}