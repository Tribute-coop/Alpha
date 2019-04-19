import React from 'react';
import { useTranslation } from 'react-i18next';

export function IssuanceSetupComponent(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="mb-4">
        {t('setup.issuance.title')}
      </h3>
      <p className="lead">
        {t('setup.issuance.description1')}
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
