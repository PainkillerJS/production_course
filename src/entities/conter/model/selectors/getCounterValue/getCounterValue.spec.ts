import { type DeepPartial } from '@reduxjs/toolkit';

import { type StateSchema } from '@/app/providers/StoreProvider/config/stateSchema';

import { getCounterValue } from './getCounterValue';

describe('test selector = getCounterValue', () => {
  test('selector should counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    };

    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
