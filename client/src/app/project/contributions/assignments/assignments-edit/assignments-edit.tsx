import React, { useEffect, useState } from 'react';

import { NotFound } from 'app/shared/components';
import { AssignmentsEditProps } from './assignments-edit-props';
import { AssignmentsDetail } from '../assignments-detail';
import { Assignment } from '../assignment.model';

import { assignments as mockAssignments } from 'app/mocks';

export function AssignmentsEdit({ onClose, routeProps }: AssignmentsEditProps): JSX.Element {
  const [ assignment, setAssignment ] = useState<Assignment>();
  const [ isNotFound, setIsNotFound ] = useState<boolean>(false);

  useEffect((): void => {
    const { id } = routeProps.match.params as { id: string };
    const foundAssignment = mockAssignments.find(
      (_assignment): boolean => _assignment.id === id
    );

    setIsNotFound(!foundAssignment);

    if (foundAssignment) {
      setAssignment(foundAssignment);
    }
  }, [routeProps.match]);

  return (
    isNotFound ?
      <NotFound /> :
      <AssignmentsDetail onClose={onClose} routeProps={routeProps} assignment={assignment} />
  );
}
