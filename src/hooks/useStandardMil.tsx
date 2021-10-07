const M = -0.23703;
const B = 1001.46;

const useStandardMil = (distance: number) => {
  return Math.round(M * distance + B);
}

export default useStandardMil;