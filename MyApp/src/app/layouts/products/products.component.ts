import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-products",
  template: `
    <div class="container" style="background-color: aqua;">
      <div class="section" style="background-color: rgb(230, 224, 224);">
        <!--   Icon Section   -->
        <div class="row">
          <!-- Start : row -->
          <app-bikes></app-bikes>
          <app-books></app-books>
          <app-mobiles></app-mobiles>

          <br />

          <!-- End : row -->
        </div>
      </div>
    </div>
  `,
  styleUrls: ["products.component.css"],
})
export class ProductsComponent {}
