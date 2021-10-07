import { useCallback, useEffect, useMemo, useState } from "react";
import useMil from "../../hooks/useMil";
import { Team } from "../../types/Team";
import { CalculatorViewTypes } from "./CalculatorViewTypes";

const useCalculatorViewModel = (props: CalculatorViewTypes.Props) => {
  const [selectedTeam, setSelectedTeam] = useState<Team>("standard");
  const [distanceNumbers, setDistanceNumbers] = useState<string | null>(null);
  const distance = useMemo(() => {
    if(distanceNumbers) {
      return +distanceNumbers;
    } else return null;
  }, [distanceNumbers])

  const mil = useMil(selectedTeam, distance);

  const addToDistance = useCallback((numb: number) =>{
    setDistanceNumbers(c => numb === -1 ? null : c ? c + numb : numb + "");
  }, [])

  useEffect(() => {
    if(distanceNumbers !== null ) {
      if(+distanceNumbers > 1600) {
        setDistanceNumbers(null);
      }
    }
    
  }, [distanceNumbers])

  return {distanceNumbers, mil, addToDistance}
}

export default useCalculatorViewModel;