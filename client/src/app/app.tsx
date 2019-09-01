import React from 'react';

import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import { NotFound } from 'app/shared/components';
import { MainLayout } from 'app/core/layout';
import { ProjectLayout } from './project/project-layout';
import { MyLayout } from './my/my-layout';

import { projects as mockProjects } from './mocks';

export function App(): JSX.Element {
  const project = mockProjects[0];

  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path="/">
            <Redirect to={`/project/${project.id}`} />
          </Route>

          <Route path="/project/:id" component={ProjectLayout} />
          <Route path="/my" component={MyLayout} />
          <Route path="*" component={NotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}