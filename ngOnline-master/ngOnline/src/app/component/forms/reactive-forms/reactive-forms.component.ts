import { UsernameValidators } from './../../../Validators/username.validator';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
})
export class ReactiveFormsComponent {
  // constructor(private usernameValidators: UsernameValidators){}
  formObj = new FormGroup({
    userName: new FormControl('', [
      Validators.required,

      Validators.minLength(4),
      Validators.pattern('Rekha'),
      UsernameValidators.noSpace,
    ]),
    pass: new FormControl('', Validators.required),
  });
  get uName() {
    return this.formObj.get('userName');
  }
}
