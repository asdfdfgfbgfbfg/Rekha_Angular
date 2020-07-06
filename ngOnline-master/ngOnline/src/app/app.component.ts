import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template: `<mark>internal html</mark>`, // view : UI
  styles: [
    `
      .my-class {
        color: red;
      }
    `,
  ],
})
export class AppComponent {
  // data and logic
}

// static web App  :  const data
// Dynamic Web App :  data with var
// { }    : res for obj, block
// {{ }}  : interpolation : [ data binding ] to print var
//   '' -> ``
