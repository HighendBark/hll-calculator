import { useMemo } from "react";
import { Team } from "../types/Team";
import useUSSRMil from "./useUSSRMil";
import useStandardMil from "./useUSSRMil";

const useMil = (team: Team, distance: number | null) => {
  const standard = useStandardMil(distance ?? 0);
  const ussr = useUSSRMil(distance ?? 0);

  const selection = useMemo(() => {
    if(distance === null) return 0;
    if(team === "standard") return standard;
    if(team === "ussr") return ussr;
  }, [distance, team, standard, ussr])

  return selection;
}
export default useMil;