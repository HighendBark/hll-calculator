import { useMemo } from "react";
import { Team } from "../types/Team";
import useUSSRMil from "./useUSSRMil";
import useStandardMil from "./useUSSRMil";

const useMil = (team: Team, distance: number) => {
  const standard = useStandardMil(distance);
  const ussr = useUSSRMil(distance);

  const selection = useMemo(() => {
    if(team === "standard") return standard;
    if(team === "ussr") return ussr;
  }, [distance, team, standard, ussr])

  return selection;
}
export default useMil;