import { useContext } from "react";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";
import { IsLoadingContext } from "@/context/isLoading/IsLoadingContext";
import { Spinner } from "../spinner/Spinner";

import "./layout.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { isLoading } = useContext(IsLoadingContext);

  return (
    <div className="swapi-layout">
      {isLoading && (
        <div className="swapi-layout__spinner-container">
          <Spinner />
        </div>
      )}

      <h1>SWAPI</h1>
      {!isLoading && <Breadcrumbs />}
      {children}
    </div>
  );
};
