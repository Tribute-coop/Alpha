import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import queryString from 'query-string';

import { QueryFilters, applyQueryFilters } from '../../../core/utils/filters';
import { Assignment } from './assignment.model';
import { AssignmentsList } from './assignments-list';
import { AssignmentsFilters } from './assignments-filters';
import { AssignmentsEmpty } from './assignments-empty';

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
  const [loaded, setLoaded] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect((): void => {
    setLoaded(true);
    setAssignments(mockAssignments);
    setIsEmpty(mockAssignments.length === 0);
  }, []);

  useEffect((): void => {
    if (!loaded) {
      return;
    }

    const search = queryString.parse(props.location.search);
    const filteredAssignments = applyQueryFilters<Assignment>(
      mockAssignments,
      search,
      filters
    );

    setAssignments(filteredAssignments);
  }, [loaded, props.location.search]);

  return (
    <div className="container-fluid">
      { loaded && (
        <div className="row">
          { isEmpty ?
            (<div className="col-12">
              <AssignmentsEmpty />
            </div>) :
            (<div className="col-12 col-lg-9">
              <AssignmentsFilters {...props } />
              <AssignmentsList assignments={assignments} />
            </div>)
          }
        </div>
      )}
    </div>
  );
}