import { Route, Switch } from "react-router";
import CalculatorView from "../calculator/CalculatorView";
import SettingsView from "../settings/SettingsView";
import useMainViewModel from "./MainViewModel";
import { version } from "../../../package.json";
import useIsMobile from "../../hooks/useIsMobile";

const MainView = () => {
  const viewModel = useMainViewModel();
  const isMobile = useIsMobile();

  return (
    <main className="w-full h-screen min-h-0 inline-flex flex-col antialiased grayscale-0 text-gray-800 overscroll-contain">
      <span className="fixed bottom-3 left-3 text-xs text-gray-400 dark:text-gray-700">
        {version}
        {isMobile ? "m" : "d"}
      </span>
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
