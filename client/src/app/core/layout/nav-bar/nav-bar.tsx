import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { navBar } from './nav-bar-value';

import './nav-bar.scss';

import { projects as mockProjects } from '../../../mocks';

export function NavBar(): JSX.Element {
  const { t } = useTranslation();
  const project = mockProjects[0];

  return (
    <nav className="nav-bar">
      { navBar.map((group, groupIndex): JSX.Element =>
        (<ul className="nav-bar__group" key={groupIndex}>
          { group.children.map((subGroup, subGroupIndex): JSX.Element =>
            (<li key={subGroupIndex} >
              <NavLink
                to={group.path.replace(':id', project.id) + subGroup.path}
                className="nav-bar__link"
                activeClassName="is-active"
                title={t(`${subGroup.title}.title`)}>
                <subGroup.icon />
              </NavLink>
            </li>)
          )}
        </ul>)
      )}
    </nav>
  );
}
