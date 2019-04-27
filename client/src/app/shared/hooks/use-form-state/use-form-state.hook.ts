import { useState, ChangeEvent, useCallback } from 'react';

import {
  ControlValue,
  FormValidator,
  FormErrors,
  ControlState,
  FormState,
  FormFieldsValue
} from '../';

function validate(controlValue: ControlValue, validators: FormValidator[]): FormErrors | null {
  const result = validators
    .map((v: FormValidator): FormErrors | null => v(controlValue))
    .reduce((previous: FormErrors, errors): FormErrors => {
      return errors !== null ? { ...previous, ...errors } : previous;
    }, {});

  return Object.keys(result).length === 0 ? null : result;
}

export function useFormState(initialFormState: FormState): any {
  const [formState, setFormState] = useState(initialFormState);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    if (!(name in formState.fields)) {
      throw new Error(`${name} field is not part of the FormGroup`);
    }

    const { fields } = formState;

    fields[name].value = value;
    fields[name].dirty = true;

    Object.keys(fields).forEach((fieldName): void => {
      const controlState = fields[fieldName];

      const errors = validate(
        controlState.value,
        controlState.validators
      );

      const valid = errors === null;

      fields[fieldName] = {
        ...controlState,
        errors,
        valid
      };
    });

    const valid = Object.values(fields)
      .every((control: ControlState): boolean => control.valid);

    setFormState({ valid, dirty: true, fields });
  }, [formState]);

  const getValue = useCallback((): FormFieldsValue => {
    const { fields } = formState;

    return Object.keys(fields).reduce((previous, fieldName): FormFieldsValue => {
      return { ...previous, [fieldName]: fields[fieldName].value };
    }, {});

  }, [formState]);

  return {
    getValue,
    formState,
    handleChange
  };
}