// import { MOBPARTS } from './../../products/mob-part/mock-data';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
// })
// export class DashboardComponent implements OnInit {
//   mobiles;
//   constructor() {}

//   ngOnInit(): void {
//     this.mobiles = MOBPARTS;
//   }

//   addProd(newProd) {
//     console.clear();
//     console.log(' newProd', newProd);

//     this.mobiles.push(newProd);
//   }
// }

import { MOBPARTS } from './../../products/mob-part/mock-data';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  mobiles;

  url = 'https://my-json-server.typicode.com/MSraoSuryawanshi/api/db';
  mobPartsApi;
  constructor(private http: Http) {}

  ngOnInit(): void {
    this.mobiles = MOBPARTS;

    this.http.get(this.url).subscribe((res) => {
      console.log('res', res.json().apiData);
      this.mobPartsApi = res.json().apiData;
    });
  }

  addProd(newProd) {
    console.clear();
    console.log(' newProd', newProd);

    this.mobiles.push(newProd);
  }
}
