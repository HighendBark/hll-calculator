import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import useEventListener from "../../hooks/useEventListener";
import useMil from "../../hooks/useMil";
import { Team } from "../../types/Team";
import { CalculatorViewTypes } from "./CalculatorViewTypes";
import { HistoryEntry } from "./components/History";

const Events = {
  saveCurrent: "SAVE_CURRENT",
};

const useCalculatorViewModel = (props: CalculatorViewTypes.Props) => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
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

  const dispatchSaveEvent = () =>
    window.dispatchEvent(new CustomEvent(Events.saveCurrent));

  useEventListener(
    Events.saveCurrent,
    relayAddToHistory(distance, selectedTeam, mil)
  );

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
  };
};

export default useCalculatorViewModel;
