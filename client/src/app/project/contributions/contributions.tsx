import React from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { RouterOutlet } from 'app/shared/components/router-outlet';
import routes from './contributions.routes';

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

      <RouterOutlet path={path} routes={routes} />
    </React.Fragment>
  );
}