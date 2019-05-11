import { ParsedQuery } from 'query-string';

export interface QueryFilters<T> {[key: string]: (item: T, prop: string) => boolean }

export function applyQueryFilters<T>(arr: T[], query: ParsedQuery, filters: QueryFilters<T>): T[] {
  return Object.keys(query).reduce((currentValue, key): T[] =>
    currentValue.filter((item: T): boolean =>
      filters[key](item, query[key] as string)
    )
  , arr);
}