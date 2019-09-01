import React, { useState, useEffect, useCallback } from 'react';
import { RouteComponentProps, Switch, Route } from 'react-router';

import { State } from 'app/shared/models';
import { SlidePanel } from 'app/shared/components';
import { getParentRoute } from 'app/shared/utils/helpers';
import { applyQueryFilters } from 'app/shared/utils/filters';
import { Assignment } from './assignment.model';
import { AssignmentsList } from './assignments-list';
import { AssignmentsEdit } from './assignments-edit';
import { AssignmentsEmpty } from './assignments-empty';
import { AssignmentsDetail } from './assignments-detail';
import { AssignmentsFilters } from './assignments-filters';
import { assignmentsQueryFilters } from './assignments-query-filters';

import './assignments.scss';

import { assignments as mockAssignments } from 'app/mocks';

export function Assignments(props: RouteComponentProps): JSX.Element {
  const { history, location, match: { path } } = props;
  const [assignmentsState, setAssignmentsState] = useState<State<Assignment>>({
    loaded: false,
    empty: true,
    data: []
  });


  useEffect((): void => {
    setAssignmentsState({
      loaded: true,
      data: mockAssignments,
      empty: mockAssignments.length === 0
    });
  }, []);

  useEffect((): void => {
    if (!assignmentsState.loaded) {
      return;
    }

    const filteredAssignments = applyQueryFilters<Assignment>(
      mockAssignments,
      location.search,
      assignmentsQueryFilters
    );

    setAssignmentsState((prevAssignmentsState): State<Assignment> => {
      return {
        ...prevAssignmentsState,
        data: filteredAssignments
      };
    });

  }, [assignmentsState.loaded, location.search]);

  const handleClose = useCallback((): void => {
    const parentRoute = getParentRoute(location);
    history.push(parentRoute);
  }, [history, location]);

  return (
    <React.Fragment>
      <div className="container-fluid">
        { assignmentsState.loaded && (
          <div className="row">
            { assignmentsState.empty ?
              (<div className="col-12">
                <AssignmentsEmpty />
              </div>) :
              (<div className="col-12 col-lg-9">
                <AssignmentsFilters {...props } />
                <AssignmentsList assignments={assignmentsState.data} />
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
    </React.Fragment>
  );
}