import { BreadcrumbContextProvider } from "./breadcrumb/BreadcrumbProvider";
import { IsLoadingContextProvider } from "./isLoading/IsLoadingProvider";
import { ResidentsContextProvider } from "./residents/ResidentsProvider";

interface AppContextProps {
  children: React.ReactNode;
}

export const AppContext = ({ children }: AppContextProps) => {
  return (
    <>
      <IsLoadingContextProvider>
        <BreadcrumbContextProvider>
          <ResidentsContextProvider>{children}</ResidentsContextProvider>
        </BreadcrumbContextProvider>
      </IsLoadingContextProvider>
    </>
  );
};
