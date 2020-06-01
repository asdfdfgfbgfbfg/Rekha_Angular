import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-us",
  template: `
    <div class="container">
      <div class="section">
        <div class="row">
          <div class="col s12 center" style=" box-shadow: 17px 14px 20px;">
            <div class="carousel">
              <a class="carousel-item" href="#one!"
                ><img src="../assets/img/nokia-1.jpg"
              /></a>
              <a class="carousel-item" href="#two!"
                ><img src="../assets/img/mob2.png"
              /></a>
              <a class="carousel-item" href="#three!"
                ><img src="../assets/img/mi-1.jpg"
              /></a>
              <a class="carousel-item" href="#four!"
                ><img src="../assets/img/apple-2.jpg"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ContactUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
