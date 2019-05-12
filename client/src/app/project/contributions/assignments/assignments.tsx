import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';
import queryString from 'query-string';

import { QueryFilters, applyQueryFilters } from '../../../core/utils/filters';
import { Assignment } from './assignment.model';
import { AssignmentRow } from './assignment-row';
import { AssignmentsFilters } from './assignments-filters';

import { assignments as mockAssignments } from '../../mocks';

import './assignments.scss';

const filters: QueryFilters<Assignment> = {
  q: (assignment: Assignment, q: string): boolean =>
    assignment.title.toLowerCase().includes(q)
  ,
  domain: (assignment: Assignment, domain: string): boolean =>
    assignment.domain === domain
  ,
  status: (assignment: Assignment, status: string): boolean =>
    assignment.status === +status
  ,
  who: (assignment: Assignment, userId: string): boolean =>
    assignment.assignedTo.some((assigned): boolean => assigned.id === userId)
};

export function Assignments(props: RouteComponentProps): JSX.Element {
  const { t } = useTranslation();
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect((): void => {
    const search = queryString.parse(props.location.search);
    const filteredAssignments = applyQueryFilters<Assignment>(
      mockAssignments,
      search,
      filters
    );

    setAssignments(filteredAssignments);
  }, [props.location.search]);

  return (
    <div className="container-fluid py-3">
      <div className="row">
        <div className="col-12 col-lg-9">

          <AssignmentsFilters {...props } assignments={mockAssignments}/>

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
            ? (<div className="assignments__no-matches">
              {t('generic.no_matches_found')}
            </div>)
            : assignments.map((assignment): JSX.Element =>(
              <AssignmentRow key={assignment.id} {...assignment} />
            ))
          }
        </div>
      </div>
    </div>
  );
}