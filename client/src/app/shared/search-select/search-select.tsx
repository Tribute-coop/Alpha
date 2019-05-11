import React, { HTMLProps } from 'react';

import './search-select.scss';

export function SearchSelect(props: HTMLProps<HTMLSelectElement>): JSX.Element {
  const { name, value, onChange, children, label } = props;

  return (
    <div className="search-select form-group">
      { label && <label className="search-select__label uppercase-label">{label}:</label> }
      <select name={name} className="search-select__select form-control"
        onChange={onChange} value={value}>
        { children }
      </select>
    </div>
  );
}


