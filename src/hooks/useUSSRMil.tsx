const A = 1;
const B = 1120;
const K = 21.33;
const L = 100;

const useUSSRMil = (distance: number) => {
  return Math.round( B - (((distance / L) - A) * K));
}

export default useUSSRMil;