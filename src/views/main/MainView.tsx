import { Route, Switch } from "react-router";
import CalculatorView from "../calculator/CalculatorView";
import SettingsView from "../settings/SettingsView";
import useMainViewModel from "./MainViewModel";

const MainView = () => {
  const viewModel = useMainViewModel();

  return (
    <main className="w-full h-screen max-h-screen min-h-0 inline-flex flex-col antialiased grayscale-0 text-gray-800 overflow-hidden overscroll-contain">
      <Switch>
        <Route path="/">
          <CalculatorView {...viewModel} />
        </Route>
        <Route path="/settings">
          <SettingsView {...viewModel} />
        </Route>
      </Switch>
    </main>
  );
};

export default MainView;
