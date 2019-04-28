import { NavBarItem } from './nav-bar-item';

export interface NavBarGroup {
  path: string;
  children: NavBarItem[];
}