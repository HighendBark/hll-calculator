import { useEffect, useMemo } from "react";

const uA = 1;
const uB = 1120;
const uK = 21.33;
const uL = 100;

const useUSSRMil = (distance: number) => {
  const result = useMemo(() => Math.round( uB - (((distance / uL) - uA) * uK)), [distance])
  return result;
}

export default useUSSRMil;