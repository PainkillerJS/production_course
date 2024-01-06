import { type DeepPartial } from '@reduxjs/toolkit';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getSafeScroll } from '.';

describe('test selector = getSafeScroll', () => {
  test('selector should return scroll position', () => {
    const state: DeepPartial<StateSchema> = {
      safeScroll: {
        'test key': 200
      }
    };

    expect(getSafeScroll(state as StateSchema)).toEqual({
      'test key': 200
    });
  });
});
