import { AbstractControl, ValidationErrors } from '@angular/forms'

export const OnlyNumbersLetters = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value || '';
  const pattern = new RegExp(/^[A-Za-z0-9\s]+$/g);
  const isValid = pattern.test(value);

  return isValid ? null : { onlyNumbersLetters: true };
}
