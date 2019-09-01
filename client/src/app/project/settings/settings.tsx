import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { RouterOutlet } from 'app/shared/components/router-outlet';
import { TabbableNav } from 'app/shared/components/tabbable-nav';
import routes from './settings.routes';

export function Settings(props: RouteComponentProps): JSX.Element {
  const { path, url } = props.match;

  return (
    <React.Fragment>
      <TabbableNav path={url} items={routes} />
      <RouterOutlet path={path} routes={routes} />
    </React.Fragment>
  );
}