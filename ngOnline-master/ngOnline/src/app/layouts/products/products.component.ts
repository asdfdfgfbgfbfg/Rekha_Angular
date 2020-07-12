import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [],
})
export class ProductsComponent {
  mobData: any[];
  constructor(angularFireDatabase: AngularFireDatabase) {
    angularFireDatabase
      .list('/mobParts')
      .valueChanges()
      .subscribe((mobParts) => {
        this.mobData = mobParts;
        console.log(this.mobData);
      });
  }

  ngOnInit(): void {}

  title = 'Angular Welcomes you..!';
}
