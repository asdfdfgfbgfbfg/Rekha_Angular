import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleStyleDirective } from '../directives/simple-style.directive';

@NgModule({
  declarations: [SimpleStyleDirective],
  imports: [CommonModule],
  exports: [SimpleStyleDirective],
})
export class AllDirectivesModule {}
