import { type DeepPartial } from '@reduxjs/toolkit';

import { type StateSchema } from '@/app/providers/StoreProvider/config/stateSchema';

import { getCounter } from './getCounter';

describe('test selector = getCounter', () => {
  test('selector should counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    };

    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
