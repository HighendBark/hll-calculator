import { useEffect, useRef } from "react";

const useEventListener = <T>(
  event: string,
  eventHandler: (ev: T) => void,
  target: HTMLElement | Window = window
) => {
  useEffect(() => {
    if (target) {
      target.addEventListener(event, eventHandler as any);
      return () => {
        if (target) {
          target.removeEventListener(event, eventHandler as any);
        }
      };
    }
  }, [eventHandler, event]);
};
export default useEventListener;
