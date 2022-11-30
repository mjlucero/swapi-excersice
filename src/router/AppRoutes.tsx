import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";

interface AppRoutesProps {
  children?: JSX.Element;
}

export const AppRoutes = ({ children }: AppRoutesProps) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
      </Routes>
    </BrowserRouter>
  );
};
