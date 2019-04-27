import React from 'react';
import { RouterProps } from 'react-router';
import { useTranslation } from 'react-i18next';

import { Project } from '../../project.model';

const defaultSymbol = '${SYMBOL}';

export function ProjectNewIssuanceComponent(props: RouterProps & { project: Project }): JSX.Element {
  const { t } = useTranslation();
  const symbol = props.project.symbol || defaultSymbol;

  return (
    <div>
      <h3 className="mb-4">
        {t('project.new.issuance.title')}
      </h3>
      <p className="lead">
        {t('project.new.issuance.description1', { symbol })}
      </p>
      <p className="lead">
        {t('project.new.issuance.description2')}
      </p>
      <p className="lead">
        <a href="#">
          {t('project.new.issuance.help')}
        </a>
      </p>
    </div>
  );
}
