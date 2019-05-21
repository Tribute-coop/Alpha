import { useState, useEffect } from 'react';
import { Pathname } from 'history';

export function useTitleFromPath(pathname: Pathname): string {
  const [ title, setTitle ] = useState('');

  useEffect((): void => {
    const routeChunks: string[] = pathname
      .split('/')
      .filter((subPath): boolean => !!subPath)
      .slice(0, 2)
      .concat('title');

    const nextTitle = routeChunks.length < 3 ?
      '' : routeChunks.join('.');

    setTitle(nextTitle);
  }, [pathname]);

  return title;
}