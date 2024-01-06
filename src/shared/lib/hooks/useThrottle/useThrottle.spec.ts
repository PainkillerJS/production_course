import { renderHook } from '@testing-library/react-hooks';

import { useThrottle } from '.';

describe('test hook: useThrottle', () => {
  test('test', async () => {
    const testCallback = jest.fn();
    const delay = 500;

    const { waitFor } = renderHook(() => useThrottle(testCallback, delay));

    expect(testCallback).not.toHaveBeenCalled();

    waitFor(
      () => {
        expect(testCallback).toHaveBeenCalled();
      },
      { timeout: delay + 1 }
    );
  });
});
