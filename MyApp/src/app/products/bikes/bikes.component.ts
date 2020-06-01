import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bikes",
  templateUrl: "./bikes.component.html",
  styleUrls: ["./bikes.component.css"]
})
export class BikesComponent {
  bikes: any[] = [
    {
      name: "Yamaha",
      price: 126500,
      desc: "Good battery backup,durable",
      Available: 10
    },
    {
      name: "Bajaj",
      price: 152500,
      desc: "Best Model designing, Battery",
      Available: 0
    },
    {
      name: "Splender Plus",
      price: 520020,
      desc: "Best model, battery backup",
      Available: 20
    }
  ];
  setColor(color) {
    switch (color) {
      case "Yamaha":
        return "blue";
      case "Bajaj":
        return "orange";
      case "Splender Plus":
        return "green";
    }
  }
}
