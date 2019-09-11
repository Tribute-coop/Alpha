export { TabbableNav } from './tabbable-nav';

export interface TabbableItem {
  trnsKey: string;
  path: string;
  disabled?: boolean;
}