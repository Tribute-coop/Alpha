import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { NavBarGroup } from './nav-bar-group';
import { LikeIcon, UsersIcon, CoinsIcon, CogIcon, BoltIcon, WalletIcon, BellIcon } from './icons';

import './nav-bar.scss';

import avatar from 'images/avatar.svg';

function Avatar(): JSX.Element {
  return (<img src={avatar} alt="Avatar User"/>);
}

const navBar: NavBarGroup[] = [
  {
    path: '/project',
    children: [
      { path: '/contributions', title: 'project.contributions', icon: LikeIcon },
      { path: '/members', title: 'project.members', icon: UsersIcon },
      { path: '/tokens', title: 'project.tokens', icon: CoinsIcon },
      { path: '/settings', title: 'project.settings', icon: CogIcon }
    ]
  },
  {
    path: '/my',
    children: [
      { path: '/wallet', title: 'my.wallet', icon: BoltIcon },
      { path: '/activity', title: 'my.activity', icon: WalletIcon },
      { path: '/notifications', title: 'my.notifications', icon: BellIcon },
      { path: '/profile', title: 'my.profile', icon: Avatar }
    ]
  }
];

export function NavBar(): JSX.Element {
  const { t } = useTranslation();

  return (
    <nav className="nav-bar">
      { navBar.map((group, groupIndex): JSX.Element =>
        (<ul className="nav-bar__group" key={groupIndex}>
          { group.children.map((subGroup, subGroupIndex): JSX.Element =>
            (<li key={subGroupIndex} >
              <NavLink
                to={group.path + subGroup.path}
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
