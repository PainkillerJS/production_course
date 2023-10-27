import { type DeepPartial } from '@reduxjs/toolkit';

import { CountryEnum, CurrencyEnum } from '@/shared/constants/profile';
import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getProfileData } from '.';

describe('test selector = getProfileData', () => {
  test('selector should return profile data', () => {
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

    expect(getProfileData(state as StateSchema)).toEqual({
      username: 'username',
      name: 'name',
      surname: 'surname',
      age: 22,
      avatar: '',
      city: '',
      country: CountryEnum.RUSSIA,
      currency: CurrencyEnum.RUB
    });
  });
});
