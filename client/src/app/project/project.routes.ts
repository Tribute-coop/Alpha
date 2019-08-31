import { Contributions } from './contributions/contributions';
import { Settings } from './settings/settings';
import { Members } from './members/members';
import { Tokens } from './tokens/tokens';

export default [
  { path: '/contributions', component: Contributions },
  { path: '/members', component: Members },
  { path: '/tokens', component: Tokens },
  { path: '/settings', component: Settings }
];
