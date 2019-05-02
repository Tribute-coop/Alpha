import React from 'react';
import { Route, Redirect, Switch, RouteComponentProps } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './contributions.scss';

function ContributionsNew(): JSX.Element {
  return (<div>ContributionsNew</div>);
}

function ContributionsCalls(): JSX.Element {
  return (<div>ContributionsCalls</div>);
}

function ContributionsAssignments(): JSX.Element {
  return (<div>ContributionsAssignments</div>);
}

export function Contributions(props: RouteComponentProps): JSX.Element {
  const { t } = useTranslation();
  const { path } = props.match;

  return (
    <div>
      <nav className="navigation-bar">
        <NavLink className="navigation-bar__item" to={path + '/assignments'}
          activeClassName="is-active">{t('project.contributions.assignments')}</NavLink>
        <NavLink className="navigation-bar__item" to={path + '/calls'}
          activeClassName="is-active">{t('project.contributions.calls')}</NavLink>
      </nav>

      <Switch>
        <Route exact path={path} >
          <Redirect to={`${path}/assignments`}/>
        </Route>

        <Route path={`${path}/assignments`} component={ContributionsAssignments} />
        <Route path={`${path}/calls`} component={ContributionsCalls} />
        <Route path={`${path}/new`} component={ContributionsNew} />
      </Switch>
    </div>
  );
}