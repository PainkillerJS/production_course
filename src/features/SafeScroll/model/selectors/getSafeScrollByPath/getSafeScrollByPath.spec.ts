import { type DeepPartial } from '@reduxjs/toolkit';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getSafeScrollByPath } from '.';

describe('test selector = getSafeScrollByPath', () => {
  test('selector should return scroll position by key', () => {
    const state: DeepPartial<StateSchema> = {
      safeScroll: {
        'test key': 200
      }
    };

    expect(getSafeScrollByPath(state as StateSchema, 'test key')).toBe(200);
  });
});
