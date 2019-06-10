import { SelectOptions } from '../models/select-options.model';

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