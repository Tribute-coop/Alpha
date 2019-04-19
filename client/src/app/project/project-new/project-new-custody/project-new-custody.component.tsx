import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

export function ProjectNewCustodyComponent(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="mb-4">
        {t('project.new.custody.title')}
      </h3>
      <p className="lead">
        <Trans i18nKey="project.new.custody.description"></Trans>
      </p>
      <p className="lead">
        <a href="#">
          {t('project.new.custody.help')}
        </a>
      </p>
    </div>
  );
}