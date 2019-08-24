import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps, Switch, Route, Redirect } from 'react-router';

import { useTitleFromPath } from 'app/shared/hooks';
import { Tokens } from './tokens/tokens';
import { Members } from './members/members';
import { Settings } from './settings/settings';
import { Contributions } from './contributions/contributions';
import { ProjectSelector } from './project-selector';

export function ProjectLayout({ match: { path }, location: { pathname } }: RouteComponentProps): JSX.Element {
  const { t } = useTranslation();
  const title = useTitleFromPath(pathname);
  const [ showNewContribution, setShowNewContribution ] = useState<boolean>(false);

  useEffect((): void => {
    setShowNewContribution(pathname.includes('assignments'));
  }, [pathname]);

  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <ProjectSelector />

        <h4 className="main-layout__title">{t(title)}</h4>

        { showNewContribution &&
          <Link className="btn btn-primary" to={path + '/contributions/assignments/new'}>
            {t('project.contributions.newContribution')}
          </Link>
        }
      </header>
      <section className="main-layout__section">
        <Switch>
          <Route path={path + '/contributions'} component={Contributions} />
          <Route path={path + '/members'} component={Members} />
          <Route path={path + '/tokens'} component={Tokens} />
          <Route path={path + '/settings'} component={Settings} />
          <Redirect to={path + '/contributions'} />
        </Switch>
      </section>
    </div>
  );
}