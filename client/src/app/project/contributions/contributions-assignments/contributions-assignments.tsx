import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ContributionsAssignmentRow } from './contributions-assignment-row';

import './contributions-assignments.scss';

import { assignments as defaultAssignments } from '../../mocks';

export function ContributionsAssignments(): JSX.Element {
  const { t } = useTranslation();
  const [assignments] = useState(defaultAssignments);

  return (
    <div className="container-fluid py-3">
      <div className="row">
        <div className="col-9">
          <div className="contribution-object__head">
            <div className="contribution-object__info">
              {t('project.contributionsAssignment.Title')}
            </div>
            <div className="contribution-object__domain">
              {t('project.contributionsAssignment.Domain')}
            </div>
            <div className="contribution-object__assigned">
              {t('project.contributionsAssignment.AssignedTo')}
            </div>
            <div className="contribution-object__reward">
              {t('project.contributionsAssignment.Reward')}
            </div>
          </div>
          { assignments.map((assignment): JSX.Element =>(
            <ContributionsAssignmentRow key={assignment.id} {...assignment} />
          ))}
        </div>
      </div>
    </div>
  );
}