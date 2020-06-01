import { Component } from "@angular/core";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["books.component.css"]
})
export class BooksComponent {
  books: any[] = [
    {
      id: 1001,
      name: "101 Books To Read",
      price: 12500,
      desc: "Very good book",
      Available: 10
    },
    {
      id: 1002,
      name: "Psychology Books",
      price: 15200,
      desc: "Top 10 Best Pscychology books",
      Available: 0
    },
    {
      id: 1003,
      name: "Read before you die",
      price: 52000,
      desc: "Best Books to read",
      Available: 0
    }
  ];
  setColor(color) {
    switch (color) {
      case "101 Books To Read":
        return "blue";
      case "Psychology Books":
        return "orange";
      case "Read before you die":
        return "green";
    }
  }
}
