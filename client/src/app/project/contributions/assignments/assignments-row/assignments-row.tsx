import React, { ImgHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { StackedRoundedImage } from 'app/shared/components';
import { Assignment } from '../assignment.model';
import { AssignmentsDomain } from '../assignments-domain';
import { AssignmentStatus } from '../assignment-status.enum';

import './assignments-row.scss';

const states: (keyof Assignment)[] = [
  'assignedOn',
  'approvedOn',
  'startedOn'
];

export function AssignmentsRow(assignment: Assignment): JSX.Element {
  const { t } = useTranslation();

  return (
    <Link className="assignment__body bordered-box bordered-box--with-hover" to={`assignments/${assignment.id}`}>
      <div className="assignment__info">
        <div className="assignment__title">
          {assignment.title}
        </div>
        <div className="assignment__states">
          <span className="assignment__state">
            {t('project.contributions.assignment.row.status') + ': ' +
              t(`project.contributions.assignment.filters.${AssignmentStatus[assignment.status].toLowerCase()}`)}
          </span>
          { states
            .filter((state): boolean => !!assignment[state])
            .map((state: keyof Assignment): JSX.Element => (
              <span key={state} className="assignment__state">
                {t(`project.contributions.assignment.row.${state}`) + ': ' + assignment[state]}
              </span>
            ))}
        </div>
      </div>
      <div className="assignment__domain">
        <AssignmentsDomain domain={assignment.domain} />
      </div>
      <div className="assignment__assigned">
        <StackedRoundedImage images={ assignment.assignedTo.map((user): ImgHTMLAttributes<HTMLImageElement> => {
          return { src: user.thumbnail, alt: user.name };
        }) } />
      </div>
      <div className="assignment__reward reward">
        <span className="reward__amount">{assignment.rewardAmount}</span>
        <span className="reward__symbol">{assignment.rewardUnits}</span>
      </div>
    </Link>
  );
}
