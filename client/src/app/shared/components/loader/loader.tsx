import React from 'react';

import './loader.scss';

export function Loader(): JSX.Element {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <div className="loader-ripple" />
        <div className="loader-ripple" />
      </div>
    </div>
  );
}