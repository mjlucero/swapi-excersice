import { AppRoutes } from "./router/AppRoutes";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>Hello swapi</h1>
      <AppRoutes>
        <span>All Planets</span>
      </AppRoutes>
    </div>
  );
}

export default App;
