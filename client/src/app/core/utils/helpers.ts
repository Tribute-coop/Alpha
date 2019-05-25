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

