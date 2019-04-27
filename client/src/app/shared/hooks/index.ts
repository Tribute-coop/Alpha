export { useFormState } from './use-form-state/use-form-state.hook';
export { Validators } from './use-form-state/validators/validators';

export type FormValidator = (value: ControlValue) => FormErrors | null;

export type ControlValue = boolean | string | number;

export interface ValidatorFn { (control: ControlValue): FormErrors | null }

export interface FormFieldsValue { [key: string]: ControlValue }

export interface FormFieldsState { [key: string]: ControlState }

export interface FormGroup {
  [key: string]: [ControlValue, FormValidator[]];
}

export interface ControlState {
  value: ControlValue;
  dirty: boolean;
  valid: boolean;
  errors: FormErrors | null;
  validators: FormValidator[];
}

export interface FormErrors {
  [key: string]: any;
}

export class FormState {
  public dirty: boolean = false;
  public valid: boolean = true;
  public fields: { [key: string]: ControlState };

  // eslint-disable-next-line
  constructor(formGroup: FormGroup) {
    this.fields = Object.keys(formGroup)
      .reduce((previous, name): FormFieldsState => {
        const [value, validators] = formGroup[name];

        const controlState = {
          value,
          validators,
          valid: true,
          errors: null,
          dirty: false
        };

        return {
          ...previous,
          [name]: controlState
        };
      }, {});
  }
}
