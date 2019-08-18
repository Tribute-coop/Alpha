export interface State<T> {
  loaded: boolean;
  empty?: boolean;
  data: T[];
}