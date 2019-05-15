import { HTMLProps, ChangeEvent } from 'react';

export interface FieldProps<T> extends HTMLProps<T> {
  onChange: (event: ChangeEvent<T> | any ) => void;
}