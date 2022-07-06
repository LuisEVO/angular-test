import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const PrefixPhone = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = control.value || '';
  const pattern = new RegExp(/^[+]/);
  const isValid = pattern.test(value);

  return isValid ? null : { prefixPhone: true };
};
