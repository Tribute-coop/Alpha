import { useState, useEffect } from 'react';
import { Pathname } from 'history';

export function useTitleFromPath(pathname: Pathname): string {
  const [ title, setTitle ] = useState('');

  useEffect((): void => {
    const nextTitle: string = pathname
      .split('/')
      .filter((subPath): boolean => !!subPath && isNaN(+subPath))
      .slice(0, 2)
      .concat('title')
      .join('.');

    setTitle(nextTitle);
  }, [pathname]);

  return title;
}