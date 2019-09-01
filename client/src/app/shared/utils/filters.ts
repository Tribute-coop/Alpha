import { Search } from 'history';
import queryString from 'query-string';

export interface QueryFilters<T> {[key: string]: (item: T, prop: string) => boolean }

export function applyQueryFilters<T>(arr: T[], search: Search, filters: QueryFilters<T>): T[] {
  const query = queryString.parse(search);

  return Object.keys(query).reduce((currentValue, key): T[] =>
    currentValue.filter((item: T): boolean => {
      if (!filters.hasOwnProperty(key)) {
        return true;
      }

      return filters[key](item, query[key] as string);
    })
  , arr);
}