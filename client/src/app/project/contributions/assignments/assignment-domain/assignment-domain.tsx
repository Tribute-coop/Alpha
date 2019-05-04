import React from 'react';

import './assignment-domain.scss';

interface AssignmentDomainProps {
  domain: string;
}

export function AssignmentDomain(assignment: AssignmentDomainProps): JSX.Element {
  return (
    <div className="assignment-domain">
      {assignment.domain}
    </div>
  );
}
