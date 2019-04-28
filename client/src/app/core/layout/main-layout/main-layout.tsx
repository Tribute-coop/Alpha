import React from 'react';
import { RouteProps } from 'react-router';

import { NavBar } from '../nav-bar';

import './main-layout.scss';

export function MainLayout(props: RouteProps): JSX.Element {
  return (
    <div className="d-flex vh-100">
      <NavBar/>
      <main className="flex-grow-1">
        {props.children}
      </main>
    </div>
  );
}


