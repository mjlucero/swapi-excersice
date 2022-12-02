import { SetState } from "@/types/SetState";
import { createContext } from "react";

type IsLoadingContextType = {
  isLoading: boolean;
  setIsLoading: SetState<boolean>;
};

export const IsLoadingContext = createContext<IsLoadingContextType>(
  {} as IsLoadingContextType
);
