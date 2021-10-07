import { useEffect, useRef, useState } from "react";

const useDebounce = (value: string | number, delay: number = 150) => {
  const [debounced, setDebounced] = useState<typeof value>(value);

  useEffect(() => {
    const to = setTimeout(() => {
      setDebounced(value);
    }, delay);
    return () => {
      if (to) clearTimeout(to);
    };
  }, [value]);

  return debounced;
};
export default useDebounce;
