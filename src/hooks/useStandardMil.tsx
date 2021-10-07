import { useMemo } from "react";

const M = -0.23703;
const B = 1001.46;

const useStandardMil = (distance: number) => {
  const result = useMemo(() => Math.round(M * distance + B), [distance])
  return result;
}

export default useStandardMil;