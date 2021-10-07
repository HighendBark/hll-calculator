import useSettingsViewModel from "./SettingsViewModel"
import { SettingsViewTypes } from "./SettingsViewTypes"

const SettingsView = (props: SettingsViewTypes.Props) => {
  const viewModel = useSettingsViewModel(props);
  return <article>

  </article>
}

export default SettingsView