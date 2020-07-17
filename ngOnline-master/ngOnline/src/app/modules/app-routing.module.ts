import { LapiDetailsComponent } from './../products/laptops/lapi-details/lapi-details.component';
import { Component } from '@angular/core';
import { BookOffersComponent } from './../products/books/book-offers/book-offers.component';
import { BookDetailsComponent } from './../products/books/book-details/book-details.component';
import { AdminComponent } from './../admin/admin/admin.component';
import { AuthGuard } from './../guards/auth.guard';
import { LoginComponent } from './../admin/login/login.component';
import { DashboardComponent } from './../admin/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../layouts/home/home.component';
import { MobPartComponent } from '../products/mob-part/mob-part.component';
import { BooksComponent } from '../products/books/books.component';
import { LaptopsComponent } from '../products/laptops/laptops.component';
import { PensComponent } from '../products/pens/pens.component';
import { PageNotFoundComponent } from '../layouts/page-not-found/page-not-found.component';
import { SamsungComponent } from './../products/mob-part/samsung/samsung.component';
import { MotoComponent } from './../products/mob-part/moto/moto.component';
import { MobileNavComponent } from '../products/mob-part/mobile-nav/mobile-nav.component';
import { LapiOffersComponent } from '../products/laptops/lapi-offers/lapi-offers.component';
import { EditComponent } from '../products/mob-part/edit/edit.component';
import { ReactiveFormsComponent } from './../component/forms/reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './../component/forms/template-forms/template-forms.component';
import { ProductViewComponent } from '../products/product-view/product-view.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product-view/:prodObj', component: ProductViewComponent },
  { path: 'temp', component: TemplateFormsComponent },
  { path: 'react', component: ReactiveFormsComponent },
  {
    path: 'mobile',
    component: MobileNavComponent,
    children: [
      { path: '', component: MobPartComponent },
      {
        path: 'moto',
        component: MotoComponent,
      },
      {
        path: 'sam',
        component: SamsungComponent,
      },
    ],
  },
  { path: 'books', component: BooksComponent },
  {
    path: 'book-details-path',
    component: BookDetailsComponent,
    outlet: 'book-details-outlet',
  },
  {
    path: 'book-offers-path',
    component: BookOffersComponent,
    outlet: 'book-offers-outlet',
  },
  { path: 'lapi', component: LaptopsComponent },
  {
    path: 'lapiDetails',
    component: LapiDetailsComponent,
    outlet: 'outlet1',
  },
  {
    path: 'lapiOffers',
    component: LapiOffersComponent,
    outlet: 'outlet2',
  },
  { path: 'pen', component: PensComponent },
  { path: 'admin', canActivate: [AuthGuard], component: AdminComponent },

  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'lazy',
    loadChildren: '../modules/lazy/lazy.module#LazyModule',
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
