import { type DeepPartial } from '@reduxjs/toolkit';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getUserInited } from '.';

describe('test selector = getUserAuth', () => {
  test('selector should user value', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        username: 'test name',
        id: 1,
        _initied: true
      }
    };

    expect(getUserInited(state as StateSchema)).toBe(true);
  });
});
