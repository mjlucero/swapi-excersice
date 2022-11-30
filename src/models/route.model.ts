export interface Route {
  Component: () => JSX.Element;
  name: string;
  path: string;
  to: string;
}
