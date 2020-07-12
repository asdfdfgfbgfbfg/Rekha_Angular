import { MobParts } from './../models/mob-parts';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: Http) {}
  getMobParts() {
    return this.http
      .get('./../../assets/API/mob-parts.json')
      .pipe(map((res) => res.json().apiData));
  }
  // Mobparts: MobParts[] = [
  //   {
  //     id: 1,
  //     name: 'hbksdf',
  //     description: 'fjdd',
  //     inStock: 122,
  //     prodColor: '#ffff',
  //     canPurch: true,
  //     clsVar: false,
  //     country: 'india',
  //     price: 125,
  //     prodImg: 'jnjkdfnvkd',
  //     quantity: 1255,
  //   },
  // ];

  // constructor() {}
  // onGet() {
  //   return this.Mobparts;
  // }
}
