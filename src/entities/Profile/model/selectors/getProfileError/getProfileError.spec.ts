import { type DeepPartial } from '@reduxjs/toolkit';

import { CountryEnum, CurrencyEnum } from '@/shared/constants/profile';
import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getProfileError } from '.';

describe('test selector = getProfileError', () => {
  test('selector should return profile error', () => {
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
        isReadonly: true,
        error: 'error'
      }
    };

    expect(getProfileError(state as StateSchema)).toBe('error');
  });
});
