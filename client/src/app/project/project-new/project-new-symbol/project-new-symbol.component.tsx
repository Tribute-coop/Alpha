import React from 'react';
import { useTranslation } from 'react-i18next';

export function ProjectNameSymbolComponent(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="mb-4">
        {t('project.new.symbol.title')}
      </h3>
      <p className="lead">
        {t('project.new.symbol.description1')}
      </p>
      <p className="lead">
        {t('project.new.symbol.description2')}
      </p>
      <p className="lead">
        <a href="#">
          {t('project.new.symbol.help')}
        </a>
      </p>
    </div>
  );
}
