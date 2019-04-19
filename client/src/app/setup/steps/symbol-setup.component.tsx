import React from 'react';
import { useTranslation } from 'react-i18next';

export function SymbolSetupComponent(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="mb-4">
        {t('setup.symbol.title')}
      </h3>
      <p className="lead">
        {t('setup.symbol.description1')}
      </p>
      <p className="lead">
        {t('setup.symbol.description2')}
      </p>
      <p className="lead">
        <a href="#">
          {t('setup.symbol.help')}
        </a>
      </p>
    </div>
  );
}
