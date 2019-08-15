import { Location } from 'history';

import { SelectOptions } from 'app/shared/models';

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

export function smartTrim(term: string, maxLength: number = 14): string {
  if (term.length > maxLength) {
    return term.substr(0, 6) + '...' + term.substr(term.length - 4, term.length);
  }

  return term;
}

export function toDecimal(amount: number): string {
  return amount.toLocaleString('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0
  });
}

export function toEuros(amount: number): string {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 3
  });
}

export function toShortDate(date: Date): string {
  const options = { year: '2-digit', month: '2-digit', day: '2-digit' };
  return date.toLocaleDateString('en-US', options);
}

export function getParentRoute(location: Location): string {
  const { pathname, search } = location;
  const parentRoute = pathname.substring(0, pathname.lastIndexOf('/'));

  return parentRoute + search;
}

export function contains(text: string, searchString: string): boolean {
  return text.toLowerCase().includes(searchString);
}