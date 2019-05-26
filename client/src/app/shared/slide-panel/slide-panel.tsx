
import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { SlidePanelProps } from './slide-panel-props';

import CrossIcon from '../../../images/cross.svg';

import './slide-panel.scss';

export function SlidePanel(props: SlidePanelProps): JSX.Element | null {
  const { opened, children, close } = props;

  const transitionConfig = {
    in: opened,
    timeout: 500,
    mountOnEnter: true,
    unmountOnExit: true,
    classNames: {
      enter: 'slide-panel--enter',
      enterActive: 'slide-panel--enter-active',
      exit: 'slide-panel--exit',
      exitActive: 'slide-panel--exit-active'
    }
  };

  return (
    <CSSTransition { ...transitionConfig }>
      <div className="slide-panel">
        <div className="slide-panel__content">
          <button type="button" className="slide-panel__close btn btn-link" onClick={close}>
            <img src={CrossIcon} alt="Close"/>
          </button>
          { children }
        </div>

        <div className="slide-panel__backdrop" onClick={close}></div>
      </div>
    </CSSTransition>
  );
}