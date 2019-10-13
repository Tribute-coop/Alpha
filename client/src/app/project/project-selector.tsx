import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';

import { Project } from './project.model';

import { projects as mockProjects } from '../mocks';

import './project-selector.scss';

export const ProjectSelector = withRouter(function(props: RouteComponentProps): JSX.Element | null {
  const { id: projectId } = props.match.params as { id: string };
  const [ projects ] = useState<Project[]>(mockProjects);
  const [ selectedProject, setSelectedProject ] = useState<Project>();

  useEffect((): void => {
    const project = mockProjects.find(
      (p): boolean => p.id === projectId
    );

    setSelectedProject(project);
  }, [projectId]);

  if (!selectedProject) {
    return null;
  }

  return (
    <Dropdown className="project-selector">
      <Dropdown.Toggle id="project-selector" as="div" className="project-selector__brand">
        <img src={selectedProject.logo} alt={selectedProject.name} height="40" />
        <div className="project-selector__name">{selectedProject.name}</div>
      </Dropdown.Toggle>

      <Dropdown.Menu alignRight>
        { projects.map(({ id, name }: Project, key) => (
          <Dropdown.Item key={key} as={NavLink} to={ `/project/${id}/contributions/assignments`}>
            { name }
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
});