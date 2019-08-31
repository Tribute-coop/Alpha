import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { RouterOutlet } from 'app/shared/components/router-outlet';
import { TabbableNav } from 'app/shared/components/tabbable-nav';
import routes from './contributions.routes';

export function Contributions(props: RouteComponentProps): JSX.Element {
  const { path } = props.match;

  return (
    <React.Fragment>
      <TabbableNav path={path} items={routes} />
      <RouterOutlet path={path} routes={routes} />
    </React.Fragment>
  );
}