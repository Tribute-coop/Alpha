import React from 'react';
import { useTranslation } from 'react-i18next';

import { ethereumCurrency, euroCurrency, customCurrency } from '../../../core/utils/currencies';
import { toDecimal, toEuros } from '../../../core/utils/helpers';
import { CurrencyGroup } from '../../shared/currency-group/currency-group';

import './token-summary.scss';

export function TokensSummary(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="row mt-3">
      <div className="col-12 col-lg-6">
        <h6>{t('project.tokens.contributiveTokens')}</h6>

        <div className="bordered-box d-flex justify-content-between">
          <CurrencyGroup currency={customCurrency} amount={toDecimal(152010)} text={t('project.tokens.outstanding')} />
          <div className="token-summary">
            <div className="small-light-label">{t('project.tokens.issued')}:</div>
            <div className="small-light-label">{t('project.tokens.rewarded')}:</div>
            <div className="small-light-label">{t('project.tokens.redeemed')}:</div>
          </div>
          <div className="token-summary">
            <div className="text-right">{toDecimal(200000)}</div>
            <div className="text-right">{toDecimal(110230)}</div>
            <div className="text-right">{toDecimal(47090)}</div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <h6>{t('project.tokens.reserveFund')}</h6>

        <div className="bordered-box d-flex justify-content-between">
          <CurrencyGroup currency={ethereumCurrency} amount={toDecimal(223.420)} text={toEuros(2586.27)} />
          <CurrencyGroup currency={euroCurrency} amount={toDecimal(7845)} text={toEuros(7832.95)} />
          <div></div>
        </div>
      </div>
    </div>
  );
}
