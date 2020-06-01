import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-banner-one",
  templateUrl: "./banner-one.component.html",
  styles: []
})
export class BannerOneComponent {
  names = ["Nokia", "Samsung", "Apple", "MacroMax"];
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
