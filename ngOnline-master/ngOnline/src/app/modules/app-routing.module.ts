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

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

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
  { path: 'lapi', component: LaptopsComponent },
  { path: 'pen', component: PensComponent },
  { path: 'admin', canActivate: [AuthGuard], component: AdminComponent },

  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
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
