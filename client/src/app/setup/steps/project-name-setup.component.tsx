import React from 'react';
import { useTranslation } from 'react-i18next';

export function ProjectNameSetupComponent(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="mb-4">
        {t('setup.projectName.title')}
      </h3>
      <p className="lead">
        {t('setup.projectName.description')}
      </p>
    </div>
  );
}
