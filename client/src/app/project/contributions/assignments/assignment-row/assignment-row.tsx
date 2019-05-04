import React from 'react';
import { useTranslation } from 'react-i18next';

import { Assignment } from '../assignment.model';
import { AssignmentDomain } from '../assignment-domain';

import { StackedRoundedImage } from '../../../../shared';

import './assignment-row.scss';

const states: (keyof Assignment)[] = [
  'status',
  'assignedOn',
  'approvedOn',
  'startedOn'
];

export function AssignmentRow(contribution: Assignment): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="assignment-row__body">
      <div className="assignment-row__info">
        <div className="assignment-row__title">
          {contribution.title}
        </div>
        <div className="assignment-row__states">
          { states
            .filter((state): boolean => !!contribution[state])
            .map((state: keyof Assignment): JSX.Element => (
              <span key={state} className="assignment-row__state">
                {t(`project.contributions.assignment.row.${state}`) + ': ' + contribution[state]}
              </span>
            ))}
        </div>
      </div>
      <div className="assignment-row__domain">
        <AssignmentDomain domain={contribution.domain} />
      </div>
      <div className="assignment-row__assigned">
        <StackedRoundedImage images={ contribution.assignedTo.map((user): any => {
          return { src: user.thumbnail, alt: user.name };
        }) } />
      </div>
      <div className="assignment-row__reward reward">
        <span className="reward__amount">{contribution.rewardAmount}</span>
        <span className="reward__symbol">{contribution.rewardUnits}</span>
      </div>
    </div>
  );
}
