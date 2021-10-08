import { useMemo } from "react";
import useDebounce from "../../hooks/useDebounce";
import useNumpadKeys from "../../hooks/useNumpadKeys";
import { TeamLabel, Teams } from "../../types/Team";
import useCalculatorViewModel from "./CalculatorViewModel";
import { CalculatorViewTypes } from "./CalculatorViewTypes";
import Button from "./components/Button";
import History from "./components/History";

const CalculatorView = (props: CalculatorViewTypes.Props) => {
  const viewModel = useCalculatorViewModel(props);

  useNumpadKeys(
    viewModel.addToDistance,
    viewModel.resetDistance,
    viewModel.dispatchSaveEvent,
    viewModel.removeLastFromDistance
  );

  const options = Teams.map((team) => ({
    value: team,
    label: TeamLabel[team],
  }));
  const buttons = useMemo(() => {
    return Array(9)
      .fill(null)
      .map((_, idx) => idx + 1)
      .map((idx) => (
        <Button value={idx} onClick={viewModel.addToDistance} key={idx} />
      ));
  }, [viewModel.addToDistance]);

  return (
    <article className="inline-grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto mt-12 select-none">
      <div className="inline-flex flex-col p-2 bg-gray-800 rounded">
        <div className="inline-flex mb-2 h-11 rounded-none bg-gray-100">
          <select
            onChange={viewModel.changeTeam}
            className="w-full h-full p-1 py-2 rounded-none "
          >
            {options.map(({ value, label }) => (
              <option value={value} key={value} label={label}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div className="inline-flex gap-1">
          <output className="inline-flex justify-start items-baseline w-32 bg-gray-600 p-2 text-2xl text-gray-50 font-mono tabular-nums">
            <span>
              {viewModel.distance ?? viewModel.distanceNumbers ?? "0"}
            </span>
            <small className="tracking-tight text-sm ml-auto">m</small>
          </output>
          <output className="inline-flex justify-start items-baseline w-32 bg-yellow-500 p-2 text-2xl font-mono tabular-nums">
            <span>
              {viewModel.distance && +viewModel.distance > 100
                ? viewModel.mil
                : "0"}
            </span>
            <small className="tracking-tight text-sm ml-auto">mil</small>
          </output>
        </div>
        <div className="inline-grid grid-cols-3 mt-2 gap-1">{buttons}</div>
        <div className="inline-grid grid-cols-2 mt-1 gap-1">
          <Button
            isDisabled={
              viewModel.distanceNumbers === null ||
              viewModel.distanceNumbers.length < 1
            }
            value={0}
            onClick={viewModel.addToDistance}
          />
          <Button value={-1} onClick={viewModel.resetDistance} />
        </div>
        <ul></ul>
      </div>
      <History history={viewModel.history} />
    </article>
  );
};

export default CalculatorView;
