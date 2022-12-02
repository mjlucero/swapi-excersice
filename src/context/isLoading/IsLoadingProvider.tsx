import { useState } from "react";
import { IsLoadingContext } from "./IsLoadingContext";

interface IsLoadingContextProviderProps {
  children: React.ReactNode;
}

export function IsLoadingContextProvider({
  children,
}: IsLoadingContextProviderProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <IsLoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </IsLoadingContext.Provider>
  );
}
