import { type DeepPartial } from '@reduxjs/toolkit';

import { CountryEnum } from '@/entities/Contries';
import { CurrencyEnum } from '@/entities/Currency';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getProfileLoading } from '.';

describe('test selector = getProfileLoading', () => {
  test('selector should return profile loading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          id: '1',
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
