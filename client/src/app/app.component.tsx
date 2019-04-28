import React from 'react';

import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import { ProjectLayout } from './project/layout';
import { MainLayout } from './core/layout';
import { MyLayout } from './my/layout';
import { NotFound } from './shared';

function SignIn(): JSX.Element {
  return (<div>SignIn</div>);
}

export function AppComponent(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/signin" />
        </Route>

        <Route path="/signin" component={SignIn} />

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