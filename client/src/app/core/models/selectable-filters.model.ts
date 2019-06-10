import { SelectOptions } from './select-options.model';

export interface SelectableFilters {
  [filterName: string]: SelectOptions[];
}