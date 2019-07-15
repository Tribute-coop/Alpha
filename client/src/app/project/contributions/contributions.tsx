import React from 'react';
import { Route, Redirect, Switch, RouteComponentProps } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Assignments } from './assignments';

function Calls(): JSX.Element {
  return (<div>Calls</div>);
}

export function Contributions(props: RouteComponentProps): JSX.Element {
  const { t } = useTranslation();
  const { path } = props.match;

  return (
    <React.Fragment>
      <nav className="navigation-bar">
        <NavLink className="navigation-bar__item" to={path + '/assignments'}
          activeClassName="is-active">{t('project.contributions.assignments')}</NavLink>
        <NavLink className="navigation-bar__item is-disabled" to={path + '/calls'}
          activeClassName="is-active">{t('project.contributions.calls')}</NavLink>
      </nav>

      <Switch>
        <Route path={path + '/assignments'} component={Assignments} />
        <Route path={path + '/calls'} component={Calls} />
        <Redirect to={path + '/assignments'} />
      </Switch>
    </React.Fragment>
  );
}