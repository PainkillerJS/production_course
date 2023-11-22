import { type DeepPartial } from '@reduxjs/toolkit';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getUserAuthUsername } from '.';

describe('test selector = getUserAuthUsername', () => {
  test('selector should username', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        username: 'test name',
        id: '1'
      }
    };

    expect(getUserAuthUsername(state as StateSchema)).toBe('test name');
  });
});
