import { createContext } from "react";
import { BreadcrumbKeys } from "@/types/BreadcrumbKeys";

type BreadcrumbContextType = {
  breadcrumbTitlesMap: Map<BreadcrumbKeys, string>;
  updateBreadcrumbMap: (key: BreadcrumbKeys, value: string) => void;
};

export const BreadcrumbContext = createContext<BreadcrumbContextType>(
  {} as BreadcrumbContextType
);
