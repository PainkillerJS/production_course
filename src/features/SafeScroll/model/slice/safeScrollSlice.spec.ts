import { safeScrollAction, safeScrollReducer } from '.';

describe('test slice = safeScrollSlice', () => {
  test('test action setScrollPosition', () => {
    expect(
      safeScrollReducer(
        undefined,
        safeScrollAction.setScrollPosition({
          path: 'test key',
          position: 200
        })
      )
    ).toEqual({
      'test key': 200
    });
  });
});
