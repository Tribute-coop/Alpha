import React, { useEffect, useState, Suspense } from 'react';
import { RouteComponentProps } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { RouterOutlet, Loader, NotFound } from 'app/shared/components';
import { useTitleFromPath } from 'app/shared/hooks';
import { ProjectSelector } from './project-selector';
import routes from './project.routes';

import { projects as mockProjects } from '../mocks';

export function ProjectLayout(props: RouteComponentProps): JSX.Element {
  const { match, location } = props;
  const { id } = match.params as { id: string };
  const { t } = useTranslation();
  const title = useTitleFromPath(location.pathname);
  const [ showNewContribution, setShowNewContribution ] = useState<boolean>(false);

  useEffect((): void => {
    setShowNewContribution(location.pathname.includes('assignments'));
  }, [location.pathname]);

  const invalidProjectId = mockProjects.every(
    project => project.id !== id
  );

  if (invalidProjectId) {
    return <NotFound />;
  }

  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <ProjectSelector />

        <h4 className="main-layout__title">{t(title)}</h4>

        { showNewContribution &&
          <Link className="btn btn-primary"
            to={match.url + '/contributions/assignments/new'}>
            {t('project.contributions.newContribution')}
          </Link>
        }
      </header>
      <section className="main-layout__section">
        <Suspense fallback={<Loader />}>
          <RouterOutlet path={match.path} routes={routes} />
        </Suspense>
      </section>
    </div>
  );
}