import React from 'react';

import { RouteProps } from 'react-router';
import { Link } from 'react-router-dom';

export function MainLayout(props: RouteProps): JSX.Element {
  return (
    <div className="d-flex">
      <ul>
        <li><Link to="/project/contributions">Project contributions</Link></li>
        <li><Link to="/project/members">Project members</Link></li>
        <li><Link to="/project/tokens">Project tokens</Link></li>
        <li><Link to="/project/settings">Project settings</Link></li>
        <li><Link to="/my/wallet">My wallet</Link></li>
        <li><Link to="/my/activity">My activity</Link></li>
        <li><Link to="/my/profile">My profile</Link></li>
        <li><Link to="/signin">Sign-in</Link></li>
        <li><Link to="/afsfdsa">Not Found</Link></li>
      </ul>
      <div className="flex-grow-1">
        {props.children}
      </div>
    </div>
  );
}


