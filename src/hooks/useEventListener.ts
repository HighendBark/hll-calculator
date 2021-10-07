import { useEffect, useRef } from "react";

const useEventListener = <T>(event: string, eventHandler: (ev: T) => void, target: HTMLElement | Window = window) => {
  const eventHandlerRef = useRef<typeof eventHandler | null>(eventHandler);

  useEffect(() => {
    if(target && eventHandlerRef.current){
      target.addEventListener(event, eventHandlerRef.current as any);
      return () => {
        if(target && eventHandlerRef.current) {
          target.removeEventListener(event, eventHandlerRef.current as any);
        }
      }
    }
  }, [eventHandler, event])
}
export default useEventListener;