import { useEffect, useMemo, useState } from "react";
import { Team } from "../types/Team";
import useUSSRMil from "./useUSSRMil";
import useStandardMil from "./useStandardMil";

const useMil = (team: Team, distance: number | null) => {

  const [selection, setSelection] = useState(0);

  const standard = useStandardMil(distance ?? 0);
  const ussr = useUSSRMil(distance ?? 0);

  useEffect(() => {
    if(distance === null){
      setSelection(0);
    }
    if(team === "standard") {
      setSelection(standard);
    } 
    if(team === "ussr"){
      setSelection(ussr);
    }
  }, [distance, team, standard, ussr])

  useEffect(() => {
    console.log(standard, ussr);
  }, [standard, ussr])

  return selection;
}
export default useMil;