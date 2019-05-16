import { Pathname } from 'history';

export function keyFromPathname(pathname: Pathname): string {
  const routeChunks: string[] = pathname
    .split('/')
    .filter((subPath): boolean => !!subPath)
    .slice(0, 2)
    .concat('title');

  if (routeChunks.length < 3) {
    return '';
  }

  return routeChunks.join('.');
}