import useMainViewModel from "../main/MainViewModel";

export namespace SettingsViewTypes {
  export type Props = ReturnType<typeof useMainViewModel> & {}
}