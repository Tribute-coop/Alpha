import React, { useState, useEffect, useCallback } from 'react';
import { RouteComponentProps, Switch, Route } from 'react-router';
import queryString from 'query-string';

import { QueryFilters, applyQueryFilters } from '../../../core/utils/filters';
import { getParentRoute } from '../../../core/utils/helpers';
import { SlidePanel } from '../../../shared/components';
import { Assignment } from './assignment.model';
import { AssignmentsList } from './assignments-list';
import { AssignmentsFilters } from './assignments-filters';
import { AssignmentsDetail } from './assignments-detail';
import { AssignmentsEmpty } from './assignments-empty';
import { AssignmentsEdit } from './assignments-edit';

import './assignments.scss';

import { assignments as mockAssignments } from '../../mocks';

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
  const { history, location, match: { path } } = props;

  useEffect((): void => {
    setLoaded(true);
    setAssignments(mockAssignments);
    setIsEmpty(mockAssignments.length === 0);
  }, []);

  useEffect((): void => {
    if (!loaded) {
      return;
    }

    const parsedSearch = queryString.parse(location.search);
    const filteredAssignments = applyQueryFilters<Assignment>(
      mockAssignments,
      parsedSearch,
      filters
    );

    setAssignments(filteredAssignments);
  }, [loaded, location.search]);

  const handleClose = useCallback((): void => {
    const parentRoute = getParentRoute(location);
    history.push(parentRoute);
  }, [history, location]);

  return (
    <div>
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

      <Switch>
        <Route exact path={`${path}/new`} render={(routeProps): JSX.Element =>
          <SlidePanel onExit={handleClose} render={(close: () => void): JSX.Element =>
            <AssignmentsDetail onClose={close} routeProps={routeProps} />
          } />
        } />

        <Route exact path={`${path}/:id`} render={(routeProps): JSX.Element =>
          <SlidePanel onExit={handleClose} render={(close: () => void): JSX.Element =>
            <AssignmentsEdit onClose={close} routeProps={routeProps}/>
          } />
        } />
      </Switch>
    </div>
  );
}