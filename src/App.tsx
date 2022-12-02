import { AppContext } from "./context/AppContext";
import { AppRoutes } from "@/router/AppRoutes";

import "./App.scss";

function App() {
  return (
    <AppContext>
      <AppRoutes />
    </AppContext>
  );
}

export default App;
