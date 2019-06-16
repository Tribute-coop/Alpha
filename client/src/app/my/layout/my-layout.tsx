import React from 'react';
import { RouteComponentProps, Switch, Route, Redirect } from 'react-router';
import { useTranslation } from 'react-i18next';

import { useTitleFromPath } from '../../shared/hooks';

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
  const { match: { path }, location: { pathname } } = props;
  const title = useTitleFromPath(pathname);
  const { t } = useTranslation();

  return (
    <div className="main-layout main-layout--green">
      <header className="main-layout__header">
        <h4 className="main-layout__title">{t(title)}</h4>
      </header>
      <section className="main-layout__section">
        <Switch>
          <Route exact path={path} >
            <Redirect to={`${path}/wallet`}/>
          </Route>

          <Route path={`${path}/wallet`} component={Wallet} />
          <Route path={`${path}/activity`} component={Activity} />
          <Route path={`${path}/profile`} component={Profile} />
          <Route path={`${path}/notifications`} component={Notifications} />
        </Switch>
      </section>
    </div>
  );
}