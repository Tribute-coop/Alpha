import { useState, ChangeEvent, useCallback } from 'react';

import {
  ControlValue,
  FormValidator,
  FormErrors,
  ControlState,
  DefaultFormField
} from '../';

function validate(controlValue: ControlValue, validators: FormValidator[]): FormErrors | null {
  const result = validators
    .map((v: FormValidator): FormErrors | null => v(controlValue))
    .reduce((previous: FormErrors, errors): FormErrors => {
      return errors !== null ? { ...previous, ...errors } : previous;
    }, {});

  return Object.keys(result).length === 0 ? null : result;
}

export function useFormState({ initValue, initState }: DefaultFormField): any {
  const [value, setValue] = useState(initValue);
  const [formState, setFormState] = useState(initState);

  const checkFormState = useCallback((): void => {
    const { fields } = formState;

    Object.keys(fields).forEach((name: string): void => {
      const controlValue = value[name];
      let controlState = fields[name];

      const errors = validate(
        controlValue,
        controlState.validators
      );

      const dirty = true;
      const valid = errors === null;

      fields[name] = { ...controlState, errors, dirty, valid };
    });

    const valid = Object.values(fields)
      .every((control: ControlState): boolean => control.valid);

    setFormState({ valid, dirty: true, fields });
  }, [formState, value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value: currentValue } = event.target;

    if (!(name in value)) {
      throw new Error(`${name} field is not part of the FormGroup`);
    }

    setValue({ ...value, [name]: currentValue });
    checkFormState();
  };

  return {
    value,
    formState,
    handleChange
  };
}