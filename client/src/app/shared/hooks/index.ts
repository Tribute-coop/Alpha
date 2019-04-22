export { useFormState } from './use-form-state/use-form-state.hook';

export type FormValidator = (value: ControlValue) => FormErrors | null;

export type ControlValue = boolean | string | number;

export interface FormFieldsState { [key: string]: ControlState }

export interface FormFieldsValue { [key: string]: ControlValue }

export interface FormGroup {
  [key: string]: [ControlValue, FormValidator[]];
}

export interface FormState {
  dirty: boolean;
  valid: boolean;
  fields: { [key: string]: ControlState };
}

export interface ControlState {
  dirty: boolean;
  valid: boolean;
  errors: FormErrors | null;
  validators: FormValidator[];
}

export interface FormErrors {
  [key: string]: any;
}

const defaultControlState: ControlState = {
  validators: [],
  dirty: false,
  errors: null,
  valid: true
};

export class DefaultFormField {
  public initState: FormState;
  public initValue: FormFieldsValue;

  // eslint-disable-next-line
  constructor(formGroup: FormGroup) {
    const fields: FormFieldsState = {};
    const values: FormFieldsValue = {};

    Object.keys(formGroup).forEach((name: string): void => {
      const [value, validators] = formGroup[name];

      values[name] = value;
      fields[name] = {
        ...defaultControlState,
        validators
      };
    });

    this.initValue = values;

    this.initState = {
      valid: true,
      dirty: false,
      fields
    };
  }
}