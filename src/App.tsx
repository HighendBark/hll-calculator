import { HashRouter } from "react-router-dom";
import MainView from "./views/main/MainView";

function App() {
  return (
    <HashRouter>
      <MainView />
    </HashRouter>
  );
}

export default App;
