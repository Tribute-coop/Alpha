import React from 'react';
import { useTranslation } from 'react-i18next';

import { AssignmentsListProps } from './assignments-list-props';
import { AssignmentsRow } from '../assignments-row';

import './assignments-list.scss';

export function AssignmentsList({ assignments }: AssignmentsListProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <div>
      <div className="assignment__head uppercase-label">
        <div className="assignment__info">
          {t('project.contributions.assignment.title')}
        </div>
        <div className="assignment__domain">
          {t('project.contributions.assignment.domain')}
        </div>
        <div className="assignment__assigned">
          {t('project.contributions.assignment.assignedTo')}
        </div>
        <div className="assignment__reward">
          {t('project.contributions.assignment.reward')}
        </div>
      </div>

      { assignments.length === 0
        ? (<div className="assignments-list__no-matches">
          {t('generic.no_matches_found')}
        </div>)
        : assignments.map((assignment): JSX.Element =>(
          <AssignmentsRow key={assignment.id} {...assignment} />
        ))
      }
    </div>
  );
}
