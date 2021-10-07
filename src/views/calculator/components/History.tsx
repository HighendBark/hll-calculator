import { Team, TeamLabel } from "../../../types/Team";

export type HistoryEntry = { distance: number; value: number; team: Team };

type HistoryProps = {
  history: HistoryEntry[];
};

const MAX_ENTRIES = 20;

const History = (props: HistoryProps) => {
  const hasEntries = props.history.length > 0;
  const isShowingFade = props.history.length > 10;

  return (
    <ul className="relative isolate inline-flex justify-start items-start content-start flex-col p-2 gap-px rounded bg-gray-800 w-full overflow-hidden flex-1">
      <div
        className={`absolute inset-0 h-32 w-full mt-auto bg-gradient-to-b from-transparent to-gray-900 rounded pointer-events-none ${
          isShowingFade ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      {hasEntries ? (
        props.history
          .slice(0, MAX_ENTRIES)
          .map(({ distance, value, team }, idx) => (
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
