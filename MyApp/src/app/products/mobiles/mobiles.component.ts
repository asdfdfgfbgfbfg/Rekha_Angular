import { Component } from "@angular/core";

@Component({
  selector: "app-mobiles",
  templateUrl: "./mobiles.component.html",
  styleUrls: ["./Mobiles.component.css"]
})
export class MobilesComponent {
  mobObjects: any[] = [
    {
      name: "Nokia",
      price: 12500,
      desc: "Good battery backup,durable",
      Available: 10,
      Country: "Germany"
    },
    {
      name: "Samsung",
      price: 15200,
      desc: "Best Model designing, Battery",
      Available: 0,
      Country: "Australia"
    },
    {
      name: "Apple",
      price: 52000,
      desc: "Best model, battery backup",
      Available: 0,
      country: ""
    }
  ];
  setColor(color) {
    switch (color) {
      case "Nokia":
        return "blue";
      case "Samsung":
        return "orange";
      case "Apple":
        return "green";
      case "MacroMax":
        return "#e6440a";
    }
  }
}
