import { useCallback, useRef } from 'react';

export const useThrottle = (func: (...args: any[]) => void, delay: number) => {
  const throtlleRef = useRef(false);

  return useCallback(
    (...args: unknown[]) => {
      if (!throtlleRef.current) {
        func(...args);
        throtlleRef.current = true;

        setTimeout(() => {
          throtlleRef.current = false;
        }, delay);
      }
    },
    [func, delay]
  );
};
