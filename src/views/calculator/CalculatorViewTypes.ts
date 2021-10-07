import useMainViewModel from "../main/MainViewModel";

export namespace CalculatorViewTypes {
  export type Props = ReturnType<typeof useMainViewModel> & {}
}