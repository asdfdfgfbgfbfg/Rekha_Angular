import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from '../layouts/footer/footer.component';
import { BannerThreeComponent } from '../layouts/banner-three/banner-three.component';
import { ContactUsComponent } from '../layouts/contact-us/contact-us.component';
import { BannerTwoComponent } from '../layouts/banner-two/banner-two.component';
import { BooksComponent } from '../products/books/books.component';
import { LaptopsComponent } from '../products/laptops/laptops.component';
import { PensComponent } from '../products/pens/pens.component';
import { PageNotFoundComponent } from '../layouts/page-not-found/page-not-found.component';
import { HomeComponent } from '../layouts/home/home.component';
import { MotoComponent } from '../products/mob-part/moto/moto.component';
import { SamsungComponent } from '../products/mob-part/samsung/samsung.component';

@NgModule({
  declarations: [
    FooterComponent,
    BannerThreeComponent,
    ContactUsComponent,
    BannerTwoComponent,
    BooksComponent,
    LaptopsComponent,
    PensComponent,
    PageNotFoundComponent,
    HomeComponent,
    MotoComponent,
    SamsungComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    FooterComponent,
    BannerThreeComponent,
    ContactUsComponent,
    BannerTwoComponent,
    BooksComponent,
    LaptopsComponent,
    PensComponent,
    PageNotFoundComponent,
    HomeComponent,
    MotoComponent,
    SamsungComponent,
  ],
})
export class AllComponentsModule {}
