import { useMemo } from "react";

const A = 1;
const B = 1120;
const K = 21.33;
const L = 100;

const useUSSRMil = (distance: number) => {
  const result = useMemo(() => Math.round( B - (((distance / L) - A) * K)), [distance])
  return result;
}

export default useUSSRMil;