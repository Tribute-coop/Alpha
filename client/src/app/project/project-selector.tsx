import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import { Project } from './project.model';

import { projects as mockProjects } from '../mocks';

import './project-selector.scss';

export function ProjectSelector(): JSX.Element {
  const [ project ] = useState<Project>(mockProjects[0]);

  return (
    <Dropdown className="project-selector">
      <Dropdown.Toggle id="project-selector" as="div" className="project-selector__brand">
        <img src={project.logo} alt={project.name} height="40" />
        <div className="project-selector__name">{project.name}</div>
      </Dropdown.Toggle>

      <Dropdown.Menu alignRight>
        { mockProjects.map(({ name }: Project, key) => (
          <Dropdown.Item key={key}>
            { name }
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}