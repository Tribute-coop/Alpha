import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';

import { RouterOutlet } from 'app/shared/components/router-outlet';
import { useTitleFromPath } from 'app/shared/hooks';
import { ProjectSelector } from './project-selector';
import routes from './project.routes';

export function ProjectLayout(props: RouteComponentProps): JSX.Element {
  const { match, location } = props;
  const { t } = useTranslation();
  const title = useTitleFromPath(location.pathname);
  const [ showNewContribution, setShowNewContribution ] = useState<boolean>(false);

  useEffect((): void => {
    setShowNewContribution(location.pathname.includes('assignments'));
  }, [location.pathname]);

  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <ProjectSelector />

        <h4 className="main-layout__title">{t(title)}</h4>

        { showNewContribution &&
          <Link className="btn btn-primary" to={match.url + '/contributions/assignments/new'}>
            {t('project.contributions.newContribution')}
          </Link>
        }
      </header>
      <section className="main-layout__section">
        <RouterOutlet path={match.path} routes={routes} />
      </section>
    </div>
  );
}