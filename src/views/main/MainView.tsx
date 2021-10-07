import { Route, Switch } from "react-router"
import CalculatorView from "../calculator/CalculatorView";
import SettingsView from "../settings/SettingsView";
import useMainViewModel from "./MainViewModel"

const MainView = () => {
  const viewModel = useMainViewModel();

  return <main className="w-full h-screen inline-flex flex-col antialiased grayscale-0">
    <Switch>
      <Route path="/">
        <CalculatorView {...viewModel} />
      </Route>
      <Route path="/settings">
        <SettingsView {...viewModel} />
      </Route>
    </Switch>
  </main>
}

export default MainView