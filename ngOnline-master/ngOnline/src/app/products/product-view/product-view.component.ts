import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  template: `
    <p>
      product-view works!
    </p>
  `,
  styles: [],
})
export class ProductViewComponent {
  // constructor(private activatedRoute: ActivatedRoute) {
  //   activatedRoute.paramMap.subscribe((param) =>
  //     console.log('param:', param.get('proObj'))
  //   );
  // }
  @Input() dataFromParent;
  @Output() dataFromChild = new EventEmitter();

  sendData() {
    this.dataFromChild.emit('Hello from child..!');
  }
  // ngOnInit(): void {}
}
