import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Seven Mentor";

  dummyArray = ["Angular Batch", "TypeScript Batch"];

  ownerObj = {
    trainer: "Manoj Patil",
    Strength: "15",
    Timing: "3:30 to 5:30"
  };
  headingArray = ["RollNo", "StdName", "Course", "Duration"];
  dummyObj: any = [
    { rno: "1", name: "Rekha", course: "Angular", duration: "2 Months" },
    { rno: "2", name: "Ash", course: "Full Stack", duration: "6 Months" },
    { rno: "3", name: "Sak", course: "Web Development", duration: "7 Months" },
    { rno: "4", name: "Rekha", course: "Angular", duration: "2 Months" },
    { rno: "5", name: "Ash", course: "Full Stack", duration: "6 Months" },
    { rno: "6", name: "Sak", course: "Web Development", duration: "7 Months" },
    { rno: "7", name: "Rekha", course: "Angular", duration: "2 Months" },
    { rno: "8", name: "Ash", course: "Full Stack", duration: "7 Months" },
    { rno: "9", name: "Sak", course: "Web Development", duration: "2 Months" },
    { rno: "10", name: "Ash", course: "Full Stack", duration: "6 Months" },
    { rno: "11", name: "Sak", course: "Web Development", duration: "2 Months" },
    { rno: "12", name: "Rekha", course: "Angular", duration: "2 Months" },
    { rno: "13", name: "Ash", course: "Full Stack", duration: "6 Months" },
    { rno: "14", name: "Sak", course: "Web Development", duration: "2 Months" },
    { rno: "15", name: "Ash", course: "Full Stack", duration: "6 Months" }
  ];
}
