import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { TabbableItem } from '.';

import './tabbable-nav.scss';

interface TabbableNavProps {
  path: string;
  items: TabbableItem[];
}

export function TabbableNav({ path, items }: TabbableNavProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <nav className="tabbable-nav">
      { items.map((item, index): JSX.Element => (
        <NavLink key={index} className="tabbable-nav__item" to={path + item.path}
          activeClassName="is-active">{t(item.trnsKey)}</NavLink>
      )) }
    </nav>
  );
}