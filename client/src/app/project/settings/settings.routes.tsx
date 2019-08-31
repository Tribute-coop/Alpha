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
  {
    path: '/general',
    component: General,
    trnsKey: 'project.settings.general'
  },
  {
    path: '/public',
    component: PublicSettings,
    trnsKey: 'project.settings.publicSettings'
  },
  {
    path: '/tokens-and-fund',
    component: TokensAndFund,
    trnsKey: 'project.settings.tokensAndFund'
  },
  {
    path: '/value-accounting',
    component: ValueAccounting,
    trnsKey: 'project.settings.valueAccounting'
  }
];
