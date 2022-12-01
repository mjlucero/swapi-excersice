import { AppRoutes } from "@/router/AppRoutes";
import { ResidentsContextProvider } from "@/context/ResidentsProvider";

import "./App.scss";
import { Breadcrumbs } from "./components/breadcrumbs/Breadcrumbs";

function App() {
  return (
    <ResidentsContextProvider>
      <div className="swapi-app">
        <h1>Hello swapi</h1>

        <AppRoutes>
          <Breadcrumbs />
        </AppRoutes>
      </div>
    </ResidentsContextProvider>
  );
}

export default App;
