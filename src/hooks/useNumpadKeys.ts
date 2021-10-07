import { useCallback } from "react";
import useEventListener from "./useEventListener";

const buttonStrings = Array(10)
  .fill(null)
  .map((_, idx) => idx)
  .map((key) => key + "");

const useNumpadKeys = (
  onNumber?: (numb: number) => void,
  onDelete?: () => void,
  onEnter?: () => void
) => {
  const handleKeyPress = useCallback((ev: KeyboardEvent) => {
    const matchesNumberKey = buttonStrings.some((key) => ev.key === key);
    if (matchesNumberKey && onNumber) {
      onNumber(+ev.key);
    } else if (ev.key === "Delete" && onDelete) {
      onDelete();
    } else if (ev.key === "Enter" && onEnter) {
      onEnter();
    }
  }, []);

  useEventListener("keydown", handleKeyPress);
};

export default useNumpadKeys;
