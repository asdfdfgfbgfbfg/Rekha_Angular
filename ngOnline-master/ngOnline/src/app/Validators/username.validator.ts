import { ValidationErrors, AbstractControl } from '@angular/forms';

export class UsernameValidators {
  static noSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf('') >= 0) return { noSpace: true };
    return null;
  }
  static capsLetter(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).charAt[0] = ['A-Z']) return { capsLetter:true};
    return null;
  }
}
