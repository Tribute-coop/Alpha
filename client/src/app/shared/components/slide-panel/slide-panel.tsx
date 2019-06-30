import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import { SlidePanelProps } from './slide-panel-props';
import { slidePanelAnimation } from './slide-panel-animation';

import CrossIcon from 'images/cross.svg';

import './slide-panel.scss';

export function SlidePanel(props: SlidePanelProps): JSX.Element | null {
  const { render, onExit } = props;
  const [ opened, setOpened ] = useState<boolean>(false);

  useEffect((): () => void => {
    setOpened(true);

    return (): void =>
      setOpened(false);
  }, []);

  return (
    <CSSTransition { ...slidePanelAnimation } in={ opened } onExited={ onExit }>
      <div className="slide-panel">
        <div className="slide-panel__content">
          <button type="button" className="slide-panel__close btn btn-link"
            onClick={(): void => setOpened(false)}>

            <img src={CrossIcon} alt="Close"/>
          </button>
          { render((): void => setOpened(false)) }
        </div>

        <div className="slide-panel__backdrop"
          onClick={(): void => setOpened(false)}></div>
      </div>
    </CSSTransition>
  );
}