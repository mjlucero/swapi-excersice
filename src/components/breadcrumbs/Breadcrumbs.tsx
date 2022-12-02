import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "@/router/routes";

import "./breadcrumbs.scss";
import { BreadcrumbContext } from "@/context/breadcrumb/BreadcrumbContext";

interface Crumb {
  title: string;
  to: string;
}

export const Breadcrumbs = () => {
  const { breadcrumbTitlesMap } = useContext(BreadcrumbContext);
  const [crumbs, setCrumbs] = useState<Crumb[]>([]);
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((path) => path);

  useEffect(() => {
    const crumbsRoutes: Crumb[] = [];

    pathnames.forEach((_path, index) => {
      const paths = pathnames.slice(0, index + 1);

      const existingPath = routes.find(
        ({ path: routePath }) => paths.length === routePath.split("/").length
      );

      if (existingPath) {
        const title =
          breadcrumbTitlesMap.get(existingPath.crumbKey) ||
          existingPath.crumbKey;

        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        crumbsRoutes.push({
          title,
          to,
        });
      }
    });

    setCrumbs(crumbsRoutes);
  }, [location, breadcrumbTitlesMap]);

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ul>
        {crumbs.map((crumb, index) => {
          const { title, to } = crumb;
          const isLast = index === crumbs.length - 1;

          if (isLast) {
            return (
              <li color="textPrimary" key={to}>
                {title}
              </li>
            );
          }

          return (
            <li key={to}>
              <Link to={to}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
