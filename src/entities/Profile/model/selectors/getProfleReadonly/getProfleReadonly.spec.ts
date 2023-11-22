import { type DeepPartial } from '@reduxjs/toolkit';

import { CountryEnum } from '@/entities/Contries';
import { CurrencyEnum } from '@/entities/Currency';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getProfileReadonly } from '.';

describe('test selector = getProfleReadonly', () => {
  test('selector should return profile readonly flag', () => {
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

    expect(getProfileReadonly(state as StateSchema)).toBe(true);
  });
});
