import React from 'react';
import { useTranslation } from 'react-i18next';

import { AssignmentsListProps } from './assignments-list-props';
import { AssignmentRow } from '../assignment-row';

import './assignments-list.scss';

export function AssignmentsList({ assignments }: AssignmentsListProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <div>
      <div className="assignment-row__head uppercase-label">
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

      { assignments.length === 0
        ? (<div className="assignments-list__no-matches">
          {t('generic.no_matches_found')}
        </div>)
        : assignments.map((assignment): JSX.Element =>(
          <AssignmentRow key={assignment.id} {...assignment} />
        ))
      }
    </div>
  );
}
