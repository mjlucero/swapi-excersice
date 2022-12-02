import { useState } from "react";
import { BreadcrumbContext } from "./BreadcrumbContext";
import { BreadcrumbKeys } from "@/types/BreadcrumbKeys";

interface BreadcrumbContexProviderProps {
  children: React.ReactNode;
}

export function BreadcrumbContextProvider({
  children,
}: BreadcrumbContexProviderProps) {
  const [breadcrumbTitlesMap, setBreadcrumbTitlesMap] = useState(
    new Map<BreadcrumbKeys, string>()
  );

  const updateBreadcrumbMap = (key: BreadcrumbKeys, value: string) => {
    setBreadcrumbTitlesMap(new Map(breadcrumbTitlesMap.set(key, value)));
  };

  return (
    <BreadcrumbContext.Provider
      value={{
        breadcrumbTitlesMap,
        updateBreadcrumbMap,
      }}
    >
      {children}
    </BreadcrumbContext.Provider>
  );
}
