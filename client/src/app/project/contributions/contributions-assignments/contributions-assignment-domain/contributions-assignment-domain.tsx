import React from 'react';

import './contributions-assignment-domain.scss';

interface ContributionsAssignmentDomainProps {
  domain: string;
}

export function ContributionsAssignmentDomain(contribution: ContributionsAssignmentDomainProps): JSX.Element {
  return (
    <div className="contribution-domain">
      {contribution.domain}
    </div>
  );
}
