import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-two',
  template: `
    <h1>
      lazy-two works!
    </h1>
  `,
  styles: [],
})
export class LazyTwoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
