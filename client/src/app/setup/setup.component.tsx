import React, { useState } from 'react';
import { Route, Redirect, RouteProps, Switch, Link } from 'react-router-dom';

import logo from '../../images/TributeLogo.svg';
import routes from './setup.routes';

// import { SetupState } from './setup-state.model';
import { Setup, Custody } from './setup.model';

import './setup.component.scss';
import { useTranslation } from 'react-i18next';

const defaultSetup: Setup = {
  custody: Custody.BanckAccount,
  projectName: '',
  symbol: '',
  issuance: 0
};

export function SetupComponent(): JSX.Element {
  const [setup, setSetup] = useState(defaultSetup);
  const { t } = useTranslation();

  console.log('t ', t);

  const updateSetup = (value: Partial<Setup>): void => {
    const currentSetup = { ...setup, ...value };

    setSetup(currentSetup);
    console.log('Value...... ', setup);
  };

  return (
    <main className="container mt-5 mb-5">
      <nav className="navbar navbar-light mb-5">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Tribute Logo"
          />
          Tribute
        </a>

        <span className="float-right">
          {t('setup.header.already_have_an_account')}
          <a className="" href="/login">
            {t('setup.header.login')}
          </a>
        </span>
      </nav>

      <section>
        <ul>
          {routes.map((route: RouteProps, index: number): JSX.Element => (
            <li key={index}>
              <Link to={'/setup' + route.path}> {route.path} </Link>
            </li>
          ))}
        </ul>

        <div className="row">
          <div className="col">
            <Switch>
              {routes.map(
                ({ component: SetupChildComponent, path }, index: number): JSX.Element => (
                  <Route
                    exact
                    key={index}
                    path={'/setup' + path}
                    render={(props): JSX.Element => (
                      <SetupChildComponent
                        {...props}
                        handler={updateSetup}
                      />
                    )}
                  />
                )
              )}
              <Route
                render={(): JSX.Element => <Redirect to={'/setup' + routes[0].path} />}
              />
            </Switch>
          </div>
          <div className="col">
            <pre>{JSON.stringify(setup, null, 2)}</pre>
          </div>
        </div>
      </section>
    </main>
  );
}
