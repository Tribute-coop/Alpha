import React from 'react';

import { NavBarGroup } from './nav-bar-group';

import {
  LikeIcon,
  UsersIcon,
  CoinsIcon,
  CogIcon,
  BoltIcon,
  WalletIcon,
  BellIcon
} from './icons';

import avatar from 'images/avatar.svg';

function Avatar(): JSX.Element {
  return (<img src={avatar} alt="Avatar User"/>);
}

export const navBar: NavBarGroup[] = [
  {
    path: '/project/:id',
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