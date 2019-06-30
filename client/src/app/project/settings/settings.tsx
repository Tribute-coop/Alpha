import React from 'react';
import { Route, Redirect, Switch, RouteComponentProps } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { General } from './general';

function PublicSettings(): JSX.Element {
  return (<div>PublicSettings</div>);
}

function TokensAndFund(): JSX.Element {
  return (<div>TokensAndFund</div>);
}

function ValueAccounting(): JSX.Element {
  return (<div>ValueAccounting</div>);
}

export function Settings(props: RouteComponentProps): JSX.Element {
  const { t } = useTranslation();
  const { path } = props.match;

  return (
    <div>
      <nav className="navigation-bar">
        <NavLink className="navigation-bar__item" to={path + '/general'}
          activeClassName="is-active">{t('project.settings.general')}</NavLink>
        <NavLink className="navigation-bar__item is-disabled" to={path + '/public'}
          activeClassName="is-active">{t('project.settings.publicSettings')}</NavLink>
        <NavLink className="navigation-bar__item is-disabled" to={path + '/tokens-and-fund'}
          activeClassName="is-active">{t('project.settings.tokensAndFund')}</NavLink>
        <NavLink className="navigation-bar__item is-disabled" to={path + '/value-accounting'}
          activeClassName="is-active">{t('project.settings.valueAccounting')}</NavLink>
      </nav>

      <Switch>
        <Route path={`${path}/general`} component={General} />
        <Route path={`${path}/public`} component={PublicSettings} />
        <Route path={`${path}/tokens-and-fund`} component={TokensAndFund} />
        <Route path={`${path}/value-accounting`} component={ValueAccounting} />

        <Route exact path={path} >
          <Redirect to={`${path}/general`}/>
        </Route>
      </Switch>
    </div>
  );
}