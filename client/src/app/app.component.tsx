import React from 'react';
import { Route, Switch, BrowserRouter, RouteProps } from 'react-router-dom';

import routes from './app.routes';

import './app.component.scss';

export function AppComponent(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route: RouteProps, index: number): JSX.Element => (
          <Route
            exact={route.exact}
            key={index}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}
