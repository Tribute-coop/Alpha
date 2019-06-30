import React, { FormEvent, ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Project } from '../../project.model';

import { projects as mockProjects } from 'app/mocks';

export function General(): JSX.Element {
  const { t } = useTranslation();
  const [ project, setProject ] = useState<Project>(mockProjects[0]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();

    const { name, value } = event.target;

    setProject((prevProject): Project =>
      ({ ...prevProject, [name]: value })
    );
  };

  return (
    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col-12 col-lg-4">
          <form className="" onSubmit={handleSubmit} autoComplete="off">
            <div className="form-group">
              <label htmlFor="name" className="uppercase-label">
                {t('project.settings.projectName')}
              </label>
              <input type="text" id="name" name="name" value={project.name}
                className="form-control" onChange={handleChange}/>
            </div>

            <div className="form-group">
              <label htmlFor="logo" className="uppercase-label">
                {t('project.settings.squareLogo')}
              </label>
              <div>
                <img src={project.logo} alt={project.name} />

                <button className="btn btn-outline-secondary ml-5 py-1">
                  <span className="text-danger mr-2" aria-hidden="true">&times;</span>
                  {(t('project.settings.remove'))}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="uppercase-label">
                {t('project.settings.projectContactEmail')}
              </label>
              <input type="text" id="email" name="email" value={project.email}
                className="form-control" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="location" className="uppercase-label">
                {t('project.settings.mainLocation')}
              </label>
              <input type="text" id="location" name="location" value={project.location}
                className="form-control" onChange={handleChange} />
            </div>

            <hr className="mt-5" />

            <div className="">
              <input disabled={false} className="btn btn-outline-primary" type="submit"
                value={String(t('project.settings.archiveTheProject'))} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}