import { useCallback, useRef } from 'react';

export const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
  const throtlleRef = useRef(false);

  return useCallback(() => {
    if (!throtlleRef.current) {
      callback();
      throtlleRef.current = true;

      setTimeout(() => {
        throtlleRef.current = false;
      }, delay);
    }
  }, [callback, delay]);
};
