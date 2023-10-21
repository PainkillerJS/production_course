import { type DeepPartial } from '@reduxjs/toolkit';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getLoginState } from '.';

describe('test selector = getLoginState', () => {
  test('selector should login value', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: 'test name',
        password: 'test password',
        isLoading: true,
        error: 'error'
      }
    };

    expect(getLoginState(state as StateSchema)).toEqual({
      username: 'test name',
      password: 'test password',
      isLoading: true,
      error: 'error'
    });
  });
});
