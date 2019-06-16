import React from 'react';

import './assignments-domain.scss';

interface AssignmentsDomainProps {
  domain: string;
}

export function AssignmentsDomain(assignment: AssignmentsDomainProps): JSX.Element {
  return (
    <div className="assignments-domain">
      {assignment.domain}
    </div>
  );
}
