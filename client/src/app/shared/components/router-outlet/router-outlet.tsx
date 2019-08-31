import React, { memo } from 'react';
import { Route, Switch, Redirect, RouteProps } from 'react-router';

interface RouteOutletProps {
  routes: RouteProps[];
  path: string;
}

// eslint-disable-next-line
export const RouterOutlet = memo(function({ path, routes }: RouteOutletProps): JSX.Element {
  return (
    <Switch>
      { routes.map((props, index): JSX.Element =>
        <Route key={index} {...props} path={path + props.path} />
      )}

      <Redirect to={path + routes[0].path as string} />
    </Switch>
  );
});
