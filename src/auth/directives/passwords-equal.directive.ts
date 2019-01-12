import { Directive, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appPasswordsEqual]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => PasswordsEqualDirective), multi: true }
  ]
})
export class PasswordsEqualDirective implements Validator {

  @Input() appPasswordsEqual: string;

  constructor() { }

  validate(control: AbstractControl) {
    const password_confirm = control.value;
    const password = control.root.get(this.appPasswordsEqual);
    if (password && password_confirm !== password.value) {
      console.log(control);
      return {
        passwordsNotEqual: true
      }
    }
    return null;
  }
}
