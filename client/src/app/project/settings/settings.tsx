import React from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { RouterOutlet } from 'app/shared/components/router-outlet';
import routes from './settings.routes';

export function Settings(props: RouteComponentProps): JSX.Element {
  const { t } = useTranslation();
  const { path } = props.match;

  return (
    <React.Fragment>
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

      <RouterOutlet path={path} routes={routes} />
    </React.Fragment>
  );
}