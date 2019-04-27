import React, { ChangeEvent, FormEvent } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RouterProps } from 'react-router';

import { TributeLogo } from '../../core/tribute-logo/tribute-logo.component';

import { Custody } from '../custody.enum';

import routes, { projectNewPath } from '../project.routes';

import { useFormState, FormGroup, FormState, Validators } from '../../shared/hooks';
import { UpperCaseInput } from '../../shared/components';

import { Project } from '../project.model';

import './project-new.component.scss';

const formGroup: FormGroup = {
  projectName: ['', [
    Validators.required,
    Validators.pattern(new RegExp(/^[\w-_.]*$/))
  ]],
  symbol: ['', [
    Validators.required,
    Validators.blacklist([])
  ]],
  issuance: ['', [
    Validators.required
  ]],
  custody: [Custody.BankAccount, [
    Validators.required
  ]]
};

const initialFormState = new FormState(formGroup);

export function ProjectNewComponent(props: RouterProps): JSX.Element {
  const { getValue, formState, handleChange } = useFormState(initialFormState);
  const { t } = useTranslation();

  const project: Project = getValue();

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
                      (<ProjectNewStepComponent {...childProps} project={project} />)
                  } />
                )
              )}
              <Route render={(): JSX.Element => <Redirect to={routes[0].path} />} />
            </Switch>
          </div>
          <div className="col-md-12 col-lg-5 offset-lg-1">
            <form className="project-new__form" onSubmit={handleSubmit} autoComplete="off">
              <div className="form-group" >
                <label htmlFor="projectName"> {t('project.new.form.projectName')}</label>
                <div className="validatable-input">
                  <input type="text" id="projectName" name="projectName" className="form-control validatable-input__data"
                    onChange={handleChange} onFocus={handleFocus} />
                  {
                    formState.fields.projectName.dirty &&
                    formState.fields.projectName.valid &&
                    (<span className="checkmark validatable-input__status"></span>)
                  }
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="symbol"> {t('project.new.form.symbol')}</label>
                <div className="validatable-input">
                  <UpperCaseInput type="text" id="symbol" name="symbol" className="form-control validatable-input__data"
                    onChange={handleChange} onFocus={handleFocus} minLength={3} maxLength={5}/>
                  {
                    formState.fields.symbol.dirty &&
                    formState.fields.symbol.valid &&
                    (<span className="checkmark validatable-input__status"></span>)
                  }
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="issuance"> {t('project.new.form.issuance')}</label>
                <div className="validatable-input symbol">
                  <input type="text" id="issuance" name="issuance" className="form-control validatable-input__data symbol__input"
                    onChange={handleChange} onFocus={handleFocus} />
                  <div className="symbol__placeholder">{project.symbol}</div>
                  {
                    formState.fields.issuance.dirty &&
                    formState.fields.issuance.valid &&
                    (<span className="checkmark validatable-input__status"></span>)
                  }
                </div>
              </div>

              <div className="form-group">
                <label>{t('project.new.form.custody')}</label>

                <div className="custom-control custom-radio">
                  <input type="radio" id="bankAccount" name="custody" className="custom-control-input" defaultChecked onFocus={handleFocus}/>
                  <label className="custom-control-label" htmlFor="bankAccount">{t('project.new.form.bankAccount')}</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="smartContract" name="custody" className="custom-control-input" disabled />
                  <label className="custom-control-label" htmlFor="smartContract">{t('project.new.form.smartContract')}</label>
                </div>
              </div>

              <input disabled={!(formState.dirty && formState.valid)} className="btn btn-primary btn-block btn-lg" type="submit" value={String(t('project.new.form.createProject'))} />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
