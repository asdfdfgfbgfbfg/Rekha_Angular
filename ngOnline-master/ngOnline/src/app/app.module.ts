import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from './firebase/firebase-config';
// import { firebaseConfig } from './../firebase/firebase-config';

import { AppComponent } from './app.component';
import { ProductsComponent } from './layouts/products/products.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { NavComponent } from './layouts/nav/nav.component';
import { MobPartComponent } from './products/mob-part/mob-part.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { MobileNavComponent } from './products/mob-part/mobile-nav/mobile-nav.component';

import { AllComponentsModule } from './modules/all-components.module';
import { AllMaterialModule } from './modules/all-material.module';
import { AllPipesModule } from './modules/all-pipes.module';
import { AllDirectivesModule } from './modules/all-directives.module';

import { ComServic } from './services/com-servic.service';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ImpDataComponent } from './admin/imp-data/imp-data.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LazyModule } from './modules/lazy/lazy.module';
import { BookDetailsComponent } from './products/books/book-details/book-details.component';
import { BookOffersComponent } from './products/books/book-offers/book-offers.component';
import { HostDirective } from '../app/directives/host.directives';
import { LapiDetailsComponent } from './products/laptops/lapi-details/lapi-details.component';
import { LapiOffersComponent } from './products/laptops/lapi-offers/lapi-offers.component';
import { TemplateFormsComponent } from './component/forms/template-forms/template-forms.component';
import { ReactiveFormsComponent } from './component/forms/reactive-forms/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,

    ProductsComponent,
    BannerOneComponent,
    NavComponent,
    MobPartComponent,
    MobileNavComponent,
    LoginComponent,
    DashboardComponent,
    ImpDataComponent,
    AdminComponent,
    BookDetailsComponent,
    BookOffersComponent,
    HostDirective,
    LapiDetailsComponent,
    LapiOffersComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AllMaterialModule,
    AllPipesModule,
    AllDirectivesModule,
    AllComponentsModule,
    HttpModule,
    LazyModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ], // module : group of logics
  bootstrap: [AppComponent], // to run : root compo
  providers: [ComServic, AuthGuard],
})
export class AppModule {}

// fileName.fileType.tech
// classNameModule

//  index.html  ->     .html : lib load
