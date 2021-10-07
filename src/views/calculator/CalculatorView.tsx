import { TeamLabel, Teams } from "../../types/Team";
import useCalculatorViewModel from "./CalculatorViewModel";
import { CalculatorViewTypes } from "./CalculatorViewTypes";
import Button from "./components/Button";
import History from "./components/History";

const CalculatorView = (props: CalculatorViewTypes.Props) => {
  const viewModel = useCalculatorViewModel(props);

  const options = Teams.map((team) => ({value: team, label: TeamLabel[team]}));
  const buttons = Array(9).fill(null).map((_,idx) => idx + 1);

  

  return <article className="inline-flex flex-col mx-auto mt-3 select-none">
    <div className="inline-flex flex-col p-2 bg-gray-800 rounded">
    <div className="inline-flex mb-2">
      <select className="w-full h-full p-1 py-2 bg-gray-100">
        {options.map(({value, label}) => <option value={value} key={value} label={label} />)}
      </select>
    </div>
      <div className="inline-flex gap-1">
        <output className="w-32 bg-gray-600 p-2 text-2xl text-gray-50 font-mono tabular-nums">{viewModel.distance ?? "0"}</output>
        <output className="w-32 bg-yellow-500 p-2 text-2xl font-mono tabular-nums">{viewModel.mil}</output>
      </div>
      <div className="inline-grid grid-cols-3 mt-2 gap-1">
        {buttons.map((idx) => <Button value={idx} onClick={viewModel.addToDistance} key={idx} />)}
      </div>
      <ul>
      </ul>
    </div>
    <History history={[]} />
  </article>
}

export default CalculatorView;