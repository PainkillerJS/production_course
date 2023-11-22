import { type DeepPartial } from '@reduxjs/toolkit';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getItemsSidebar } from '.';

describe('test selector = getItemsSidebar', () => {
  test('selector should return sidebar items without user', () => {
    const state: DeepPartial<StateSchema> = { user: {} };

    expect(getItemsSidebar(state as StateSchema).length).toBe(2);
  });

  test('selector should return sidebar items with user', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        username: 'test user',
        id: '2'
      }
    };

    expect(getItemsSidebar(state as StateSchema).length).toBe(4);
  });
});
