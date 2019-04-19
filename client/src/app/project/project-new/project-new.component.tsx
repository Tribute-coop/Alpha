import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { RouterProps } from 'react-router';

import { TributeLogo } from '../../core/tribute-logo/tribute-logo.component';

import { Project } from '../project.model';
import { Custody } from '../custody.enum';

import routes, { projectNewPath } from '../project.routes';
import './project-new.component.scss';

const defaultProject: Project = {
  custody: Custody.BankAccount,
  projectName: '',
  symbol: '',
  issuance: ''
};

export function ProjectNewComponent(props: RouterProps): JSX.Element {
  const [project, setProject] = useState(defaultProject);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(project);
  };

  const handleFocus = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name } = event.target;
    props.history.push(`${projectNewPath}/${name}`);
  };

  return (
    <main className="container mt-4 mb-4">
      <nav className="navbar navbar-light mb-5">
        <a className="navbar-brand" href="/">
          <TributeLogo></TributeLogo>
        </a>
      </nav>

      <section className="project-new__steps">
        <div className="row">
          <div className="col-md-12 col-lg-5 order-lg-last">
            <Switch>
              {routes.map(
                ({ component: ProjectNewStepComponent, path }, index: number): JSX.Element => (
                  <Route exact key={index} path={path} render={
                    (childProps: RouterProps): JSX.Element =>
                      (<ProjectNewStepComponent {...childProps} project={project} />)
                  } />
                )
              )}
              <Route render={(): JSX.Element => <Redirect to={routes[0].path} />} />
            </Switch>
          </div>
          <div className="col-md-12 col-lg-5 offset-lg-1">
            <form className="project-new__form" onSubmit={handleSubmit} autoComplete="off">
              <div className="form-group">
                <label htmlFor="name">Project Name</label>
                <input type="text" className="form-control" name="name" id="name" onChange={handleChange} onFocus={handleFocus} />
              </div>

              <div className="form-group">
                <label htmlFor="symbol">Symbol</label>
                <input type="text" className="form-control" name="symbol" id="symbol" onChange={handleChange} onFocus={handleFocus} />
              </div>

              <div className="form-group">
                <label htmlFor="issuance">Supply</label>
                <input type="text" className="form-control" name="issuance" id="issuance" onChange={handleChange} onFocus={handleFocus} />
              </div>

              <div className="form-group">
                <label>Custody</label>

                <div className="form-check">
                  <input className="form-check-input" type="radio" name="custody" id="bankAccount" value={Custody.BankAccount} onChange={handleChange} onFocus={handleFocus} />
                  <label className="form-check-label" htmlFor="bankAccount">
                    On your bank account
                  </label>
                </div>

                <div className="form-check disabled">
                  <input className="form-check-input" type="radio" name="custody" id="smartContract" value={Custody.SmartContract} onChange={handleChange} onFocus={handleFocus} disabled />
                  <label className="form-check-label" htmlFor="smartContract">
                    On a smart contract (coming soon)
                  </label>
                </div>
              </div>

              <input className="btn btn-primary btn-block btn-lg" type="submit" value="Create your project" />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
