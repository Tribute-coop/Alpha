import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AssignmentRow } from './assignment-row';

import { assignments as defaultAssignments } from '../../mocks';

export function Assignments(): JSX.Element {
  const { t } = useTranslation();
  const [assignments] = useState(defaultAssignments);

  return (
    <div className="container-fluid py-3">
      <div className="row">
        <div className="col-9">
          <div className="assignment-row__head">
            <div className="assignment-row__info">
              {t('project.contributions.assignment.title')}
            </div>
            <div className="assignment-row__domain">
              {t('project.contributions.assignment.domain')}
            </div>
            <div className="assignment-row__assigned">
              {t('project.contributions.assignment.assignedTo')}
            </div>
            <div className="assignment-row__reward">
              {t('project.contributions.assignment.reward')}
            </div>
          </div>
          { assignments.map((assignment): JSX.Element =>(
            <AssignmentRow key={assignment.id} {...assignment} />
          ))}
        </div>
      </div>
    </div>
  );
}