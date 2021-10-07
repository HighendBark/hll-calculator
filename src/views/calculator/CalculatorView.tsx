import useCalculatorViewModel from "./CalculatorViewModel";
import { CalculatorViewTypes } from "./CalculatorViewTypes";

const CalculatorView = (props: CalculatorViewTypes.Props) => {
  const viewModel = useCalculatorViewModel(props);

  return <article>
    
  </article>
}

export default CalculatorView;