import React from 'react';

import logo from '../../../images/TributeLogo.svg';

import './tribute-logo.component.scss';

export function TributeLogo(): JSX.Element {
  const logoSize = 36;

  return (
    <div className="logo">
      <img
        src={logo}
        width={logoSize}
        height={logoSize}
        alt="Tribute Logo"
      />

      <span className="logo__name">
        Tribute
      </span>
    </div>
  );
}
