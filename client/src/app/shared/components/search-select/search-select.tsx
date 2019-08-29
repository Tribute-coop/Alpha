import React from 'react';

import { FieldProps } from 'app/shared/models';

import './search-select.scss';

export function SearchSelect(props: FieldProps<HTMLSelectElement>): JSX.Element {
  const { name, value, onChange, children, label } = props;

  return (
    <div className="search-select form-group">
      { label && <label htmlFor={name} className="search-select__label uppercase-label">{label}:</label> }
      <select id={name} name={name} className="search-select__select form-control"
        onChange={onChange} value={value}>
        { children }
      </select>
    </div>
  );
}


