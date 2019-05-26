import React from 'react';
import { useTranslation } from 'react-i18next';

import { Assignment } from '../assignment.model';
import { AssignmentDomain } from '../assignment-domain';
import { AssignmentStates } from '../assignment-status.enum';

import { StackedRoundedImage } from '../../../../shared';

import './assignment-row.scss';

const states: (keyof Assignment)[] = [
  'assignedOn',
  'approvedOn',
  'startedOn'
];

export function AssignmentRow(assignment: Assignment): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="assignment-row__body">
      <div className="assignment-row__info">
        <div className="assignment-row__title">
          {assignment.title}
        </div>
        <div className="assignment-row__states">
          <span className="assignment-row__state">
            {t('project.contributions.assignment.row.status') + ': ' +
              t(`project.contributions.assignment.filters.${AssignmentStates[assignment.status].toLowerCase()}`)}
          </span>
          { states
            .filter((state): boolean => !!assignment[state])
            .map((state: keyof Assignment): JSX.Element => (
              <span key={state} className="assignment-row__state">
                {t(`project.contributions.assignment.row.${state}`) + ': ' + assignment[state]}
              </span>
            ))}
        </div>
      </div>
      <div className="assignment-row__domain">
        <AssignmentDomain domain={assignment.domain} />
      </div>
      <div className="assignment-row__assigned">
        <StackedRoundedImage images={ assignment.assignedTo.map((user): any => {
          return { src: user.thumbnail, alt: user.name };
        }) } />
      </div>
      <div className="assignment-row__reward reward">
        <span className="reward__amount">{assignment.rewardAmount}</span>
        <span className="reward__symbol">{assignment.rewardUnits}</span>
      </div>
    </div>
  );
}
