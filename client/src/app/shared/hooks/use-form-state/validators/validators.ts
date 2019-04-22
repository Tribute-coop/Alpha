import { ControlValue, FormErrors } from '../..';

// https://github.com/angular/angular/edit/master/packages/forms/src/validators.ts?message=docs(forms)%3A%20describe%20your%20change...#L136-L157

function isEmptyInputValue(value: ControlValue): boolean {
  return value === null || value === undefined || value === '';
}

export const Validators = {
  required(value: ControlValue): FormErrors | null {
    return isEmptyInputValue(value) ? { 'required': true } : null;
  }
};

