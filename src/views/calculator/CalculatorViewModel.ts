import { useCallback, useEffect, useMemo, useState } from "react";
import { CalculatorViewTypes } from "./CalculatorViewTypes";

const useCalculatorViewModel = (props: CalculatorViewTypes.Props) => {
  const [distanceNumbers, setDistanceNumbers] = useState<string | null>(null);
  const mil = useMemo(() => {
    
  }, [])

  const addToDistance = useCallback((numb: number) =>{
    setDistanceNumbers(c => c ? c + numb : numb + "");
  }, [])

  useEffect(() => {
    if(distanceNumbers !== null ) {
      if(+distanceNumbers > 1600) {
        setDistanceNumbers(null);
      }
    }
    
  }, [distanceNumbers])

  return {distance: distanceNumbers, mil, addToDistance}
}

export default useCalculatorViewModel;