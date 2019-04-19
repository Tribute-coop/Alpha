import React from 'react';
import { RouterProps } from 'react-router';
import { useTranslation } from 'react-i18next';

import { Setup } from '../setup.model';

const defaultSymbol = '${SYMBOL}';

export function IssuanceSetupComponent(props: RouterProps & { setup: Setup }): JSX.Element {
  const { t } = useTranslation();
  const symbol = props.setup.symbol || defaultSymbol;

  return (
    <div>
      <h3 className="mb-4">
        {t('setup.issuance.title')}
      </h3>
      <p className="lead">
        {t('setup.issuance.description1', { symbol })}
      </p>
      <p className="lead">
        {t('setup.issuance.description2')}
      </p>
      <p className="lead">
        <a href="#">
          {t('setup.issuance.help')}
        </a>
      </p>
    </div>
  );
}
