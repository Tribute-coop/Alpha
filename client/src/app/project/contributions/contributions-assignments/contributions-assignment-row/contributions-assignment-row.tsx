import React from 'react';
import { useTranslation } from 'react-i18next';

import { ContributionsAssignment } from '../contributions-assignment.model';
import { ContributionsAssignmentDomain } from '../contributions-assignment-domain';

import { StackedRoundedImage } from '../../../../shared';

import './contributions-assignment-row.scss';

const states: (keyof ContributionsAssignment)[] = [
  'status',
  'assignedOn',
  'approvedOn',
  'startedOn'
];

export function ContributionsAssignmentRow(contribution: ContributionsAssignment): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="contribution-object__body">
      <div className="contribution-object__info">
        <div className="contribution-object__title">
          {contribution.title}
        </div>
        <div className="contribution-object__states">
          { states
            .filter((state): boolean => !!contribution[state])
            .map((state: keyof ContributionsAssignment): JSX.Element => (
              <span key={state} className="contribution-object__state">
                {t(`project.contributionsAssignmentRow.${state}`) + ': ' + contribution[state]}
              </span>
            ))}
        </div>
      </div>
      <div className="contribution-object__domain">
        <ContributionsAssignmentDomain domain={contribution.domain} />
      </div>
      <div className="contribution-object__assigned">
        <StackedRoundedImage images={ contribution.assignedTo.map((user): any => {
          return { src: user.thumbnail, alt: user.name };
        }) } />
      </div>
      <div className="contribution-object__reward reward">
        <span className="reward__amount">{contribution.rewardAmount}</span>
        <span className="reward__symbol">{contribution.rewardUnits}</span>
      </div>
    </div>
  );
}
