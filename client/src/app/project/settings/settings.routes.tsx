import React from 'react';

import { General } from './general';

function PublicSettings(): JSX.Element {
  return (<div>PublicSettings</div>);
}

function TokensAndFund(): JSX.Element {
  return (<div>TokensAndFund</div>);
}

function ValueAccounting(): JSX.Element {
  return (<div>ValueAccounting</div>);
}

export default [
  { path: '/general', component: General },
  { path: '/public', component: PublicSettings },
  { path: '/tokens-and-fund', component: TokensAndFund },
  { path: '/value-accounting', component: ValueAccounting }
];
