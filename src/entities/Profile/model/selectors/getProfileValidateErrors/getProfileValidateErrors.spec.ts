import { type DeepPartial } from '@reduxjs/toolkit';

import { CountryEnum } from '@/entities/Contries';
import { CurrencyEnum } from '@/entities/Currency';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { ValidateProfileError } from '../../types';

import { getProfileValidateErrors } from '.';

describe('test selector = getProfileValidateErrors', () => {
  test('selector should return profile validate errors', () => {
    const validateErrors = [
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_USER_DATA
    ];

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
        validateErrors
      }
    };

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors);
  });
});
