import { lazy } from 'react';

import { Contributions } from './contributions/contributions';

const Settings = lazy(() => import('./settings/settings').then((m) => ({ default: m.Settings })));
const Members = lazy(() => import('./members/members').then((m) => ({ default: m.Members })));
const Tokens = lazy(() => import('./tokens/tokens').then((m) => ({ default: m.Tokens })));

export default [
  { path: '/contributions', component: Contributions },
  { path: '/members', component: Members },
  { path: '/tokens', component: Tokens },
  { path: '/settings', component: Settings }
];
