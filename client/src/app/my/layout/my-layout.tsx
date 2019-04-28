import React from 'react';
import { RouteComponentProps, Switch, Route, Redirect } from 'react-router';

function Wallet(): JSX.Element {
  return (<div>Wallet</div>);
}

function Activity(): JSX.Element {
  return (<div>Activity</div>);
}

function Profile(): JSX.Element {
  return (<div>Profile</div>);
}

function Notifications(): JSX.Element {
  return (<div>Notifications</div>);
}

export function MyLayout(props: RouteComponentProps): JSX.Element {
  const { path } = props.match;

  return (
    <div>
      <section>MyLayout</section>
      <Switch>
        <Route exact path={path} >
          <Redirect to={`${path}/wallet`}/>
        </Route>

        <Route path={`${path}/wallet`} component={Wallet} />
        <Route path={`${path}/activity`} component={Activity} />
        <Route path={`${path}/profile`} component={Profile} />
        <Route path={`${path}/notifications`} component={Notifications} />
      </Switch>
    </div>
  );
}