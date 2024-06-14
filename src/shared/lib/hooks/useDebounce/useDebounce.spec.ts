import { vi } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';

import { useDebounce } from '.';

describe('test hook: useDebounce', () => {
  test('test', async () => {
    const testCallback = vi.fn();
    const delay = 500;

    const { waitFor, rerender } = renderHook(() => useDebounce(testCallback, delay));

    expect(testCallback).not.toHaveBeenCalled();

    waitFor(rerender, { timeout: delay / 2 });

    expect(testCallback).not.toHaveBeenCalled();

    waitFor(
      () => {
        expect(testCallback).toHaveBeenCalled();
      },
      { timeout: delay + 1 }
    );
  });
});
