import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { AllPipesModule } from "./../../../ngOnline-master/ngOnline/src/app/modules/all-pipes.module";
import { AllMaterialModule } from "./../../../ngOnline-master/ngOnline/src/app/modules/all-material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./../../../ngNewApp/src/app/app-routing.module";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

import { NgModule } from "@angular/core";
import { NavComponent } from "./layouts/nav/nav.component";
import { BannerOneComponent } from "./layouts/banner-one/banner-one.component";
import { ProductsComponent } from "./layouts/products/products.component";
import { BannerTwoComponent } from "./layouts/banner-two/banner-two.component";
import { ContactUsComponent } from "./layouts/contact-us/contact-us.component";
import { BannerThreeComponent } from "./layouts/banner-three/banner-three.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { BooksComponent } from "./products/books/books.component";
import { MobilesComponent } from "./products/mobiles/mobiles.component";
import { BikesComponent } from "./products/bikes/bikes.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerOneComponent,
    ProductsComponent,
    BannerTwoComponent,
    ContactUsComponent,
    BannerThreeComponent,
    FooterComponent,
    BikesComponent,
    BooksComponent,
    MobilesComponent,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AllMaterialModule,
    AllPipesModule,
    MatToolbarModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
