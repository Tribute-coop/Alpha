import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps, Switch, Route, Redirect } from 'react-router';

import { useTitleFromPath } from 'app/shared/hooks';
import { Project } from '../project.model';
import { Contributions } from '../contributions/contributions';
import { Members } from '../members/members';
import { Tokens } from '../tokens/tokens';

import PoiLogo from 'images/poi_logo2.png';

import './project-layout.scss';

function Settings(): JSX.Element {
  return (<div>Settings</div>);
}

export function ProjectLayout({ match: { path }, location: { pathname } }: RouteComponentProps): JSX.Element {
  const { t } = useTranslation();
  const title = useTitleFromPath(pathname);
  const [ project, setProject ] = useState<Project>({ name: '', logo: '' });
  const [ showNewContribution, setShowNewContribution ] = useState<boolean>(false);

  useEffect((): void => setProject({ name: 'Poi', logo: PoiLogo }), []);

  useEffect((): void => {
    setShowNewContribution(pathname.includes('assignments'));
  }, [pathname]);

  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <div className="project-layout">
          <img src={project.logo} alt={project.name} />
          <div className="project-layout__name">{project.name}</div>
        </div>

        <h4 className="main-layout__title">{t(title)}</h4>

        { showNewContribution &&
          <Link className="btn btn-primary" to={`${path}/contributions/assignments/new`}>
            {t('project.contributions.newContribution')}
          </Link>
        }
      </header>
      <section className="main-layout__section">
        <Switch>
          <Route path={`${path}/contributions`} component={Contributions} />
          <Route path={`${path}/members`} component={Members} />
          <Route path={`${path}/tokens`} component={Tokens} />
          <Route path={`${path}/settings`} component={Settings} />

          <Route exact path={path} >
            <Redirect to={`${path}/contributions`}/>
          </Route>
        </Switch>
      </section>
    </div>
  );
}