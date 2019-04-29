import React from 'react';
import { Location } from 'history';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps, Switch, Route, Redirect } from 'react-router';

import { Project } from '../project.model';

import './project-layout.scss';

import PoiLogo from '../../../images/poi_logo2.png';

import { Members } from '../members/members';

function Contributions(): JSX.Element {
  return (<div>Contributions</div>);
}

function Tokens(): JSX.Element {
  return (<div>Tokens</div>);
}

function Settings(): JSX.Element {
  return (<div>Settings</div>);
}

function getTitleKeyFromLocation(location: Location<void>): string {
  const routeChunks: string[] = location.pathname.split('/')
    .filter((subPath): boolean => !!subPath)
    .concat('title');

  if (routeChunks.length < 3) {
    return '';
  }

  return routeChunks.join('.');
}

export function ProjectLayout(props: RouteComponentProps): JSX.Element {
  const { t } = useTranslation();

  const { match, location } = props;
  const { path } = match;

  const project: Project = {
    name: 'Poi',
    logo: PoiLogo
  };

  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <div className="project-layout">
          <img src={project.logo} alt={project.name} />
          <div className="project-layout__name">{project.name}</div>
        </div>
        <h4 className="main-layout__title">{t(getTitleKeyFromLocation(location))}</h4>
      </header>
      <section className="main-layout__section container-fluid">
            <Switch>
              <Route exact path={path} >
                <Redirect to={`${path}/contributions`}/>
              </Route>

              <Route path={`${path}/contributions`} component={Contributions} />
              <Route path={`${path}/members`} component={Members} />
              <Route path={`${path}/tokens`} component={Tokens} />
              <Route path={`${path}/settings`} component={Settings} />
            </Switch>
      </section>
    </div>
  );
}