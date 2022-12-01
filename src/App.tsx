import { AppRoutes } from "@/router/AppRoutes";
import { ResidentsContextProvider } from "@/context/ResidentsProvider";

import "./App.scss";

function App() {
  return (
    <ResidentsContextProvider>
      <div className="swapi-app">
        <h1>Hello swapi</h1>
        <AppRoutes>
          <span>All Planets</span>
        </AppRoutes>
      </div>
    </ResidentsContextProvider>
  );
}

export default App;
