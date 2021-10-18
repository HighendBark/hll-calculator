import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import useEventListener from "../../hooks/useEventListener";
import useMil from "../../hooks/useMil";
import { Team } from "../../types/Team";
import { CalculatorViewTypes } from "./CalculatorViewTypes";
import { HistoryEntry } from "./components/History";
import useWebSocket, { ReadyState } from "react-use-websocket";

const Events = {
  saveCurrent: "SAVE_CURRENT",
};
const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((c) => c + "");
const ADDITIONAL_KEYS = ["Delete"];
const KEYS = [...NUMBERS, ...ADDITIONAL_KEYS];

const HISTORY_ENTRIES = "HISTORY_ENTRIES";

const useCalculatorViewModel = (props: CalculatorViewTypes.Props) => {
  const [history, setHistory] = useState<HistoryEntry[]>(
    localStorage[HISTORY_ENTRIES]
      ? JSON.parse(localStorage[HISTORY_ENTRIES])
      : []
  );
  const [selectedTeam, setSelectedTeam] = useState<Team>("standard");
  const [distanceNumbers, setDistanceNumbers] = useState<string | null>(null);

  const distance = useMemo(() => {
    if (distanceNumbers) {
      if (distanceNumbers.length >= 3 && +distanceNumbers > 100) {
        return +distanceNumbers;
      }
    }
    return null;
  }, [distanceNumbers]);

  const mil = useMil(selectedTeam, distance);

  const resetDistance = useCallback(() => {
    setDistanceNumbers(null);
  }, []);

  const removeLastFromDistance = useCallback(() => {
    setDistanceNumbers((c) => {
      if (c && c.length > 1) {
        const oneRemoved = c.slice(0, -1);
        if (+oneRemoved > 0) {
          return oneRemoved;
        } else return null;
      }
      return null;
    });
  }, []);

  const addToDistance = useCallback((numb: number) => {
    setDistanceNumbers((c) => (c ? c + numb : numb !== 0 ? numb + "" : null));
  }, []);

  const addToHistory = useCallback((entry: HistoryEntry) => {
    setHistory((c) => [entry, ...c]);
  }, []);

  useEffect(() => {
    if (history.length) {
      localStorage.setItem(HISTORY_ENTRIES, JSON.stringify(history));
    }
  }, [history]);

  const addCurrentValuesToHistory = useCallback(
    (distance: number | null, team: Team, value: number | null) => {
      if (distance && team && value) {
        addToHistory({ distance, team, value });
        resetDistance();
      }
    },
    []
  );

  const changeTeam = useCallback((ev: ChangeEvent<HTMLSelectElement>) => {
    if (ev?.target?.value) {
      setDistanceNumbers(() => {
        setSelectedTeam(ev.target.value as Team);
        return null;
      });
    }
  }, []);

  useEffect(() => {
    if (distanceNumbers !== null) {
      if (+distanceNumbers > 1600 || distanceNumbers === "00") {
        setDistanceNumbers(null);
      }
    }
  }, [distanceNumbers]);

  useEffect(() => {
    const to = setTimeout(() => {
      addCurrentValuesToHistory(distance, selectedTeam, mil);
    }, 2000);
    return () => {
      if (to) clearTimeout(to);
    };
  }, [distance, selectedTeam, mil, addCurrentValuesToHistory]);

  const relayAddToHistory = useCallback(
    (distance: number | null, team: Team, value: number | null) => () =>
      addCurrentValuesToHistory(distance, team, value),
    []
  );

  const dispatchSaveEvent = useCallback(
    () => window.dispatchEvent(new CustomEvent(Events.saveCurrent)),
    []
  );

  useEventListener(
    Events.saveCurrent,
    relayAddToHistory(distance, selectedTeam, mil)
  );

  const serverUrl = useMemo(() => "ws://localhost:3000", []);
  const { lastMessage, readyState } = useWebSocket(serverUrl);

  const connectionStatus: string = (
    {
      [ReadyState.CONNECTING]: "Connecting",
      [ReadyState.OPEN]: "Open",
      [ReadyState.CLOSING]: "Closing",
      [ReadyState.CLOSED]: "Closed",
      [ReadyState.UNINSTANTIATED]: "Uninstantiated",
    } as { [key in ReadyState]: string }
  )[readyState];

  useEffect(() => {
    if (lastMessage) {
      if (KEYS.includes(lastMessage.data)) {
        if (NUMBERS.includes(lastMessage.data)) {
          addToDistance(+lastMessage.data);
        } else if (ADDITIONAL_KEYS.includes(lastMessage.data)) {
          resetDistance();
        }
      }
    }
  }, [lastMessage]);

  return {
    distance,
    distanceNumbers,
    mil,
    addToDistance,
    changeTeam,
    resetDistance,
    addToHistory,
    history,
    dispatchSaveEvent,
    removeLastFromDistance,
    connectionStatus,
  };
};

export default useCalculatorViewModel;
