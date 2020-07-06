import { ComServic } from './../../services/com-servic.service';
import { Component, OnInit } from '@angular/core';

// import { MobParts } from './mob-parts';
import { MobParts } from 'src/app/models/mob-parts';
import { isArray } from 'util';
// import { MOBPARTS } from './mock-data';

@Component({
  selector: 'app-mob-part',
  templateUrl: './mob-part.component.html',
})
export class MobPartComponent implements OnInit {
  name: string = 'Alex';
  // name = 1234;

  constructor(private comServic: ComServic) {
    // D.inj to create OBJ
    console.log('2 Constructor Block...!');
  } // class: DI -> obj init

  ngOnInit(): void {
    console.log('1 ngOnInit Block...!');

    // 1. Data from 'mock.ts'
    // this.mobParts = MOBPARTS;

    // 2. Data from 'DB'
    // let comServic = new ComServic();
    // this.mobParts = comServic.getMobParts();

    // 3. Data from 'Provider' using D.I.
    // this.mobParts = this.comServic.getMobParts();

    this.comServic.getMobParts().subscribe((res) => (this.mobParts = res));
  }

  // 8 lifecylehooks

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.mobParts = [];
    console.log('3 ngOnDestroy Block...!');
  }

  ngAfterViewInit() {
    console.log('4 ngAfterViewInit Block...!');
  }

  ngAfterContentInit() {
    console.log('5 ngAfterContentInit Block...!');
  }

  mobParts: MobParts[]; // 10MB

  calcProd() {
    let tot = 0;
    if (Array.isArray(this.mobParts)) {
      for (let mobPart of this.mobParts) {
        tot = tot + mobPart.inStock;
      }
    }
    return tot;
  }

  upQuantity(mobPart) {
    // alert('We are in upQuantity');
    if (mobPart.quantity < mobPart.inStock) mobPart.quantity++;
  }

  downQuantity(mobPart) {
    if (mobPart.quantity != 0) mobPart.quantity--;
  }

  catchVal(eventdata, eveObj) {
    console.clear();
    console.log("we are in 'catchVal' ", eventdata);
    console.log(' eveObj ', eveObj);
  }
}

//  Gmail :  inbox  -> send :  10mb
