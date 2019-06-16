import { SelectOptions } from '../models/select-options.model';
import { Location } from 'history';

export function toSelectables<T>(
  items: T[],
  key: keyof T,
  value: keyof T,
  requireI18n: boolean = false
): SelectOptions[] {
  return items.map((item: any): SelectOptions =>
    ({ key: item[key], value: item[value], requireI18n })
  );
}

export function getParentRoute(location: Location): string {
  const { pathname, search } = location;
  const parentRoute = pathname.substring(0, pathname.lastIndexOf('/'));

  return parentRoute + search;
}