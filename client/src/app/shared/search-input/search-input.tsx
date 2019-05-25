import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { FieldProps } from '../../core/models/field-props.model';

import './search-input.scss';

export function SearchInput({ name, value, onChange }: FieldProps<HTMLInputElement>): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>(value as string || '');
  const [debounceSearchTerm] = useDebounce(searchTerm, 300);

  useEffect((): void => {
    onChange({ target: { name, value: debounceSearchTerm.toLowerCase() } });
  }, [debounceSearchTerm, name, onChange]);

  return (
    <div className="form-group">
      <input type="text" className="search-input form-control" name={name}
        value={searchTerm} onChange={(event): void => setSearchTerm(event.target.value)}/>
    </div>
  );
}
