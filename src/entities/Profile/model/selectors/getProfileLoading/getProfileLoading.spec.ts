import { type DeepPartial } from '@reduxjs/toolkit';

import { CountryEnum, CurrencyEnum } from '@/shared/constants/profile';
import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getProfileLoading } from '.';

describe('test selector = getProfileLoading', () => {
  test('selector should return profile loading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          username: 'username',
          name: 'name',
          surname: 'surname',
          age: 22,
          avatar: '',
          city: '',
          country: CountryEnum.RUSSIA,
          currency: CurrencyEnum.RUB
        },
        isLoading: false,
        isReadonly: true
      }
    };

    expect(getProfileLoading(state as StateSchema)).toBe(false);
  });
});
