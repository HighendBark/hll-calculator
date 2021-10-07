import { Team, TeamLabel } from "../../../types/Team";

export type HistoryEntry = { distance: number; value: number; team: Team };

type HistoryProps = {
  history: HistoryEntry[];
};

const History = (props: HistoryProps) => {
  const hasEntries = props.history.length > 0;

  return (
    <ul className="inline-flex flex-col p-2 mt-2 gap-px rounded bg-gray-800 w-full">
      {hasEntries ? (
        props.history.slice(0, 25).map(({ distance, value, team }, idx) => (
          <li
            key={idx}
            className="inline-grid grid-cols-3 w-full justify-stretch items-center bg-gray-100 text-xs rounded"
          >
            <span className="inline-flex justify-center items-center">
              {TeamLabel[team]}
            </span>
            <span className="inline-flex justify-between px-5 items-baseline bg-gray-500 text-gray-50 tabular-nums">
              <span className="tabular-nums">{distance}</span>
              <small className="text-gray-100 tracking-wide">m</small>
            </span>
            <span className="inline-flex justify-between px-5 items-baseline bg-yellow-500 -mr-px rounded-r">
              <span className="font-semibold tabular-nums">{value}</span>
              <small className="text-gray-800 tracking-wide">mil</small>
            </span>
          </li>
        ))
      ) : (
        <span className="text-gray-50 mx-auto text-xs font-semibold tracking-wide">
          Jetzt loslegen und hier die Werte sehen
        </span>
      )}
    </ul>
  );
};

export default History;
