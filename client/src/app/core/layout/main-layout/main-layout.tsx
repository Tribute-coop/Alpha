import React from 'react';
import { RouteProps } from 'react-router';

import { NavBar } from '../nav-bar';

export function MainLayout(props: RouteProps): JSX.Element {
  return (
    <div className="d-flex">
      <NavBar/>
      <main className="flex-grow-1">
        {props.children}
      </main>
    </div>
  );
}


