import React from 'react';

import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import { NotFound } from 'app/shared/components';
import { MainLayout } from 'app/core/layout';
import { ProjectLayout } from './project/layout';
import { MyLayout } from './my/layout';
import { Login } from './login';

export function AppComponent(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        <Route path="/login" component={Login} />

        <MainLayout>
          <Switch>
            <Route path="/project" component={ProjectLayout} />
            <Route path="/my" component={MyLayout} />
            <Route component={NotFound}/>
          </Switch>
        </MainLayout>
      </Switch>
    </BrowserRouter>
  );
}