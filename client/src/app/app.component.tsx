import React  from 'react';
import { useTranslation } from 'react-i18next';

import logo from '../images/logo.svg';
import './app.component.scss';

export function AppComponent(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/app.tsx</code> and save to reload.
          </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('Welcome to React')}
        </a>
      </header>
    </div>
  );
}