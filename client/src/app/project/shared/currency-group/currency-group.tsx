import React from 'react';

import { Currency } from 'app/core/models/currency.model';
import { CurrencyBadget } from '../currency-badget/currency-badget';

import './currency-group.scss';

interface CurrencyGroupProps {
  currency: Currency;
  amount: string;
  text: string;
}

export function CurrencyGroup(props: CurrencyGroupProps): JSX.Element {
  const { currency, amount, text } = props;

  return (
    <div className="currency-group">
      <CurrencyBadget {...currency} />
      <div className="currency-group__amount">{amount}</div>
      <div className="small-light-label">{text}</div>
    </div>
  );
}
