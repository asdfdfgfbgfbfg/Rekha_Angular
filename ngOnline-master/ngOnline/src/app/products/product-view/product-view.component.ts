import { Component, OnInit } from '@angular/core';
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
export class ProductViewComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((param) =>
      console.log('param:', param.get('proObj'))
    );
  }

  ngOnInit(): void {}
}
