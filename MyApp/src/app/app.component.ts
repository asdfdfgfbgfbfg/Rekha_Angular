import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [
    `
      ul {
        border: solid red;
        border-radius: 5px;
        box-shadow: 1px 2px 40px orange;
        display: inline-block;
        padding: 5px;
        margin: 5px;
      }
    `
  ]
})
export class AppComponent {
  title = "hello";
  names = ["rekha", "hdjshd", "akels"];

  mobObjects = [
    {
      id: 1001,
      name: "Nokia",
      price: 12500,
      Available: 0
    },
    {
      id: 1001,
      name: "Nokia",
      price: 12500,
      Available: 0
    },
    {
      id: 1001,
      name: "Nokia",
      price: 12500,
      Available: 0
    }
  ];
}
