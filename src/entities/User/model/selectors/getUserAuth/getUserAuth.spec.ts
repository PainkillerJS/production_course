import { type DeepPartial } from '@reduxjs/toolkit';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getUserAuth } from '.';

describe('test selector = getUserAuth', () => {
  test('selector should user value', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        username: 'test name',
        id: 1
      }
    };

    expect(getUserAuth(state as StateSchema)).toEqual({
      username: 'test name',
      id: 1
    });
  });
});
