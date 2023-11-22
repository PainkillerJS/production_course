import { type DeepPartial } from '@reduxjs/toolkit';

import { CountryEnum } from '@/entities/Contries';
import { CurrencyEnum } from '@/entities/Currency';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { type ProfileType } from '../../types';

import { getProfileEditedData } from '.';

describe('test selector = getProfileEditedData', () => {
  test('selector should return profile edited data', () => {
    const data: ProfileType = {
      id: '1',
      username: 'username',
      name: 'name',
      surname: 'surname',
      age: 22,
      avatar: '',
      city: '',
      country: CountryEnum.RUSSIA,
      currency: CurrencyEnum.RUB
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
        editedData: {
          ...data,
          name: 'edited name'
        },
        isLoading: false,
        isReadonly: true
      }
    };

    expect(getProfileEditedData(state as StateSchema)).toEqual({
      ...data,
      name: 'edited name'
    });
  });
});
