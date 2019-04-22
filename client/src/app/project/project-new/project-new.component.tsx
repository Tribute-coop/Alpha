import React, { ChangeEvent, FormEvent } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { RouterProps } from 'react-router';

import { TributeLogo } from '../../core/tribute-logo/tribute-logo.component';

import { Custody } from '../custody.enum';

import routes, { projectNewPath } from '../project.routes';
import './project-new.component.scss';

import { useFormState, FormGroup, FormState } from '../../shared/hooks';
import { Validators } from '../../shared/hooks/use-form-state/validators/validators';

const formGroup: FormGroup = {
  projectName: ['', [Validators.required]],
  symbol: ['', [Validators.required]],
  issuance: ['', [Validators.required]],
  custody: [Custody.BankAccount, [Validators.required]]
};

const initialFormState = new FormState(formGroup);

export function ProjectNewComponent(props: RouterProps): JSX.Element {
  const { getValue, formState, handleChange } = useFormState(initialFormState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(getValue());
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
                      (<ProjectNewStepComponent {...childProps} project={getValue()} />)
                  } />
                )
              )}
              <Route render={(): JSX.Element => <Redirect to={routes[0].path} />} />
            </Switch>
          </div>
          <div className="col-md-12 col-lg-5 offset-lg-1">
            <form className="project-new__form" onSubmit={handleSubmit} autoComplete="off">
              <div className="form-group">
                <label htmlFor="projectName">Project Name</label>
                <input type="text" className="form-control" name="projectName" id="projectName" onChange={handleChange} onFocus={handleFocus} />
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

                <div className="custom-control custom-radio">
                  <input type="radio" id="bankAccount" name="custody" className="custom-control-input" defaultChecked onFocus={handleFocus}/>
                  <label className="custom-control-label" htmlFor="bankAccount">On your bank account</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="smartContract" name="custody" className="custom-control-input" disabled />
                  <label className="custom-control-label" htmlFor="smartContract">On a smart contract (coming soon)</label>
                </div>
              </div>

              <input disabled={!(formState.dirty && formState.valid)} className="btn btn-primary btn-block btn-lg" type="submit" value="Create your project" />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
