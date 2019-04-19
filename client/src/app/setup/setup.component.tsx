import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import routes from './setup.routes';

import { TributeLogo } from '../core/tribute-logo/tribute-logo.component';

import './setup.component.scss';

export function SetupComponent(): JSX.Element {
  return (
    <main className="container mt-4 mb-4">
      <nav className="navbar navbar-light mb-5">
        <a className="navbar-brand" href="/">
          <TributeLogo></TributeLogo>
        </a>
      </nav>

      <section>
        <div className="row">
          <div className="col-md-12 col-lg-5 order-lg-last">
            <Switch>
              {routes.map(
                ({ component, path }, index: number): JSX.Element => (
                  <Route exact key={index} path={path} component={component} />
                )
              )}
              <Route
                render={(): JSX.Element => <Redirect to={routes[0].path} />}
              />
            </Switch>
          </div>
          <div className="col-md-12 col-lg-5 offset-lg-1">
          </div>
        </div>
      </section>
    </main>
  );
}
