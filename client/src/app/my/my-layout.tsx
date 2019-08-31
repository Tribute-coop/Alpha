import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useTranslation } from 'react-i18next';

import { useTitleFromPath } from 'app/shared/hooks';
import { RouterOutlet } from 'app/shared/components/router-outlet';
import routes from './my.routes';

export function MyLayout(props: RouteComponentProps): JSX.Element {
  const pathname = props.location.pathname;
  const path = props.match.path;
  const title = useTitleFromPath(pathname);
  const { t } = useTranslation();

  return (
    <div className="main-layout main-layout--green">
      <header className="main-layout__header">
        <h4 className="main-layout__title">{t(title)}</h4>
      </header>
      <section className="main-layout__section">
        <RouterOutlet path={path} routes={routes} />
      </section>
    </div>
  );
}