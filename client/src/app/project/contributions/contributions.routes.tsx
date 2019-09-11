import React from 'react';

import { Assignments } from './assignments';

function Calls(): JSX.Element {
  return (<div>Calls</div>);
}

export default [
  {
    path: '/assignments',
    component: Assignments,
    trnsKey: 'project.contributions.assignments'
  },
  {
    path: '/calls',
    component: Calls,
    trnsKey: 'project.contributions.calls',
    disabled: true
  }
];
