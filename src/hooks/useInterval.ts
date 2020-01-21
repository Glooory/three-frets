import { useEffect, useRef } from 'react';

function useInterval(callback: Function, delay?: number | null) {
  const savedCallback = useRef<Function>(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay || 0);
      return () => clearInterval(id);
    }

    return undefined;
  }, [delay]);
}

export default useInterval;
