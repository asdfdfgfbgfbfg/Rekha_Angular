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
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
