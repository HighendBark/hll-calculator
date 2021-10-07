import { Team } from "../../../types/Team";

export type HistoryEntry = { distance: number; value: number; team: Team };

type HistoryProps = {
  history: HistoryEntry[];
};

const History = (props: HistoryProps) => {
  const hasEntries = props.history.length > 0;

  return (
    <ul className="inline-flex flex-col p-2 mt-2 rounded bg-gray-800">
      {hasEntries ? (
        props.history.map(({ distance, value }, idx) => (
          <li
            key={idx}
            className="inline-flex w-full justify-stretch items-center"
          >
            <span>{distance}</span>
            <span>{value}</span>
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
