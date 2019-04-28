export interface NavBarItem {
  path: string;
  title: string;
  icon: () => JSX.Element;
}
