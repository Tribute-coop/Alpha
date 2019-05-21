import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps, Switch, Route, Redirect } from 'react-router';

import { Project } from '../project.model';
import { Members } from '../members/members';
import { keyFromPathname } from '../../core/utils/helpers';
import { Contributions } from '../contributions/contributions';

import PoiLogo from '../../../images/poi_logo2.png';

import './project-layout.scss';

function Tokens(): JSX.Element {
  return (<div>Tokens</div>);
}

function Settings(): JSX.Element {
  return (<div>Settings</div>);
}

const newPath = '/new';

export function ProjectLayout(props: RouteComponentProps): JSX.Element {
  const {
    match: { path },
    location: { pathname, search }
  } = props;

  const { t } = useTranslation();
  const [ title, setTitle ] = useState('');
  const [ project, setProject ] = useState<Project>({ name: '', logo: '' });
  const [ newContributionURL, setNewContributionURL ] = useState('');

  useEffect((): void => setProject({ name: 'Poi', logo: PoiLogo }), []);

  useEffect((): void => setTitle(keyFromPathname(pathname)), [pathname]);

  useEffect((): void => {
    const inContribution = pathname.includes('contributions');
    let nextNewContributionURL = '';

    if (inContribution) {
      nextNewContributionURL = (pathname.includes(newPath) ?
        pathname : pathname + newPath) + search;
    }

    setNewContributionURL(nextNewContributionURL);
  }, [pathname, search]);

  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <div className="project-layout">
          <img src={project.logo} alt={project.name} />
          <div className="project-layout__name">{project.name}</div>
        </div>

        <h4 className="main-layout__title">{t(title)}</h4>

        { !!newContributionURL &&
          <Link className="btn btn-primary" to={newContributionURL}>
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

          <Route path={path} >
            <Redirect to={`${path}/contributions`}/>
          </Route>
        </Switch>
      </section>
    </div>
  );
}