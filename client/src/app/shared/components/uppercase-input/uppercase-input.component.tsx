import React, { ChangeEvent, HTMLProps } from 'react';

export function UpperCaseInput(props: HTMLProps<HTMLInputElement>): JSX.Element {
  if (!props.onChange) {
    throw new Error('UpperCaseInput requires an onChange implementation');
  }

  function toUpperCase(event: ChangeEvent<HTMLInputElement>): void {
    event.target.value = event.target.value.toUpperCase();
    (props as any).onChange(event);
  }

  return (
    <input {...props } onChange={toUpperCase} />
  );
}
