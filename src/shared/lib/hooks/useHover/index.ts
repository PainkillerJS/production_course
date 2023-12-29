import { useCallback, useMemo, useState } from 'react';

interface UseHoverBindType {
  onMouseLeave: () => void;
  onMouseEnter: () => void;
}

type UseHoverResutType = [boolean, UseHoverBindType];

export const useHover = (): UseHoverResutType => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  return useMemo(
    () => [isHover, { onMouseEnter, onMouseLeave }],
    [isHover, onMouseEnter, onMouseLeave]
  );
};
