import { Link, useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((path) => path);

  console.log({ pathnames });

  const isParam = (path: string) => !isNaN(Number(path));

  return (
    <ol>
      {pathnames.map((path, index) => {
        const isLast = index === pathnames.length - 1;
        const nextPath = pathnames[index + 1];
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        console.log({ path, nextPath, isLast, to });

        if (isLast) {
          return (
            <li color="textPrimary" key={to}>
              {/* {breadcrumbNameMap[to]} */}
              {to}
            </li>
          );
        }
        
        

        if (nextPath && isParam(nextPath)) {
          return (
            <li>
              <Link to={to} key={to}>
                {path}
              </Link>
            </li>
          );
        }
      })}
    </ol>
  );
};
