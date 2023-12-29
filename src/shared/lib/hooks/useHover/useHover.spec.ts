import { act, renderHook } from '@testing-library/react-hooks';

import { useHover } from '.';

describe('test hook: useHover', () => {
  test('test', () => {
    const { result } = renderHook(() => useHover());

    act(() => {
      result.current[1].onMouseEnter();
    });

    expect(result.current[0]).toBe(true);

    act(() => {
      result.current[1].onMouseLeave();
    });

    expect(result.current[0]).toBe(false);
  });
});
