import { BreadcrumbKeys } from "@/types/BreadcrumbKeys";

export interface Route {
  Component: () => JSX.Element;
  crumbKey: BreadcrumbKeys;
  path: string;
}
