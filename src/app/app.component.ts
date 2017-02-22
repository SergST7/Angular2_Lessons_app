import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="ui main text container">
      <h1>Hello {{name}}</h1>
      <forms-list></forms-list>
    </div>
  `,
})
export class AppComponent  { name = 'Angular'; }
