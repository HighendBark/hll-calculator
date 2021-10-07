import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import useMil from "../../hooks/useMil";
import { Team } from "../../types/Team";
import { CalculatorViewTypes } from "./CalculatorViewTypes";
import { HistoryEntry } from "./components/History";

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

  const addToDistance = useCallback((numb: number) => {
    setDistanceNumbers((c) => (c ? c + numb : numb !== 0 ? numb + "" : null));
  }, []);

  const addToHistory = useCallback((entry: HistoryEntry) => {
    setHistory((c) => [entry, ...c]);
  }, []);

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
    if (distance && selectedTeam && mil) {
      const to = setTimeout(() => {
        addToHistory({ distance, team: selectedTeam, value: mil });
        resetDistance();
      }, 2000);
      return () => {
        if (to) clearTimeout(to);
      };
    }
  }, [distance, selectedTeam, mil]);

  return {
    distance,
    distanceNumbers,
    mil,
    addToDistance,
    changeTeam,
    resetDistance,
    addToHistory,
    history,
  };
};

export default useCalculatorViewModel;
