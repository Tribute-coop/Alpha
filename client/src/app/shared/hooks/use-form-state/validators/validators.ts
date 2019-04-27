import { ControlValue, FormErrors, ValidatorFn } from '../..';

// https://github.com/angular/angular/edit/master/packages/forms/src/validators.ts?message=docs(forms)%3A%20describe%20your%20change...#L136-L157

function isEmptyInputValue(value: ControlValue): boolean {
  return value === null || value === undefined || value === '';
}

function nullValidator(): FormErrors | null {
  return null;
}

function required(value: ControlValue): FormErrors | null {
  return isEmptyInputValue(value) ? { required: true } : null;
}

function pattern(regex: RegExp): ValidatorFn {
  if (!regex) {
    return nullValidator;
  }

  return (value: ControlValue): FormErrors | null => {
    if (isEmptyInputValue(value)) {
      return null;
    }

    return regex.test(value as string) ?
      null : {
        pattern: {
          requiredPattern: regex,
          actualValue: value
        }
      };
  };
}

function blacklist(list: string[] = []): ValidatorFn {
  return (value: ControlValue): FormErrors | null => {
    if (isEmptyInputValue(value)) {
      return null;
    }

    return list.indexOf(value as string) === -1 ?
      null : {
        pattern: {
          forbidden: true,
          actualValue: value
        }
      };
  };
}

export const Validators = {
  blacklist,
  required,
  pattern
};