import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [
    `
      div {
        width: 300px;
        height: 200px;
        border: solid white;
        border-radius: 5px;
        box-shadow: 10px 22px 22px gray;
        display: inline-block;
        padding: 5px;
        margin: 5px;
      }
      h1 {
        color: #efff009e;
        background-color: gray;
        text-align: center;
      }
      h2 {
        color: aquamarine;
      }
    `
  ]
})
export class AppComponent {
  title = "Mobile Shopee";
  names = ["Nokia", "Samsung", "MicroMax", "Apple"];

  mobObjects = [
    {
      id: 1001,

      name: "Nokia",
      price: 12500,
      desc: "Good battery backup,durable",
      Available: 10
    },
    {
      id: 1002,
      name: "Samsung",
      price: 15200,
      desc: "Best Model designing, Battery backup",
      Available: 0
    },
    {
      id: 1003,
      name: "Apple",
      price: 52000,
      desc: "Best model, battery backup",
      Available: 20
    },
    {
      id: 1004,
      name: "MacroMax",
      price: 7000,
      desc: "Best model with good battery backup",
      Available: 0
    }
  ];
}
