import React from 'react';
import { Currency } from '../../../core/models/currency.model';

import './currency-badget.scss';

export function CurrencyBadget(props: Currency): JSX.Element {
  const { symbol, color, name } = props;

  return (
    <div className="currency-badget">
      <span className="currency-badget__symbol" style={{ backgroundColor: color }}>
        {symbol}
      </span>
      <span className="currency-badget__name">{name}</span>
    </div>
  );
}
