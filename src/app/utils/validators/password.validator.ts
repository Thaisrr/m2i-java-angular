import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function passwordValidator(): ValidatorFn {

  return function (form: AbstractControl) : ValidationErrors | null {
    const password = form.get('password')?.value;
    const validatePassword = form.get('validatePassword')?.value;

    return password === validatePassword ? null :  {passwordsNotMatch: true}
  }

}
