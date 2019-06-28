import React from 'react';
import { useTranslation } from 'react-i18next';

import NoContributionYet from 'images/no-contributions-yet.png';

import './assignments-empty.scss';

export function AssignmentsEmpty(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="assignments-empty">
      <div className="assignments-empty__text">
        {t('project.contributions.empty.noContributionRecorderYet')}
      </div>
      <div className="assignments-empty__text">
        {t('project.contributions.empty.addNewContribution')}
      </div>
      <img className="assignments-empty__image" src={NoContributionYet}
        alt={t('project.contributions.empty.noContributionRecorderYet')}/>
    </div>
  );
}
