import React from 'react';
import { RouteComponentProps, Switch, Route, Redirect } from 'react-router';

function Contributions(): JSX.Element {
  return (<div>Contributions</div>);
}

function Members(): JSX.Element {
  return (<div>Members</div>);
}

function Tokens(): JSX.Element {
  return (<div>Tokens</div>);
}

function Settings(): JSX.Element {
  return (<div>Settings</div>);
}

export function ProjectLayout(props: RouteComponentProps): JSX.Element {
  const { path } = props.match;

  return (
    <section>
      <Switch>
        <Route exact path={path} >
          <Redirect to={`${path}/contributions`}/>
        </Route>

        <Route path={`${path}/contributions`} component={Contributions} />
        <Route path={`${path}/members`} component={Members} />
        <Route path={`${path}/tokens`} component={Tokens} />
        <Route path={`${path}/settings`} component={Settings} />
      </Switch>
    </section>
  );
}