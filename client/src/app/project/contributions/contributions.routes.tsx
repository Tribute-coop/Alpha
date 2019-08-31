import React from 'react';

import { Assignments } from './assignments';

function Calls(): JSX.Element {
  return (<div>Calls</div>);
}

export default [
  { path: '/assignments', component: Assignments },
  { path: '/calls', component: Calls }
];
