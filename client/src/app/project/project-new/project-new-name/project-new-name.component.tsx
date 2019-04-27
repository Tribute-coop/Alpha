import React from 'react';
import { useTranslation } from 'react-i18next';

export function ProjectNewNameComponent(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="mb-4">
        {t('project.new.name.title')}
      </h3>
      <p className="lead">
        {t('project.new.name.description')}
      </p>
    </div>
  );
}
