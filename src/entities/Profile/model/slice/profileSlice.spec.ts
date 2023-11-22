import { CountryEnum } from '@/entities/Contries';
import { CurrencyEnum } from '@/entities/Currency';

import { type ProfileType, ValidateProfileError } from '../types';

import { type ProfileSchema, profileActions, profileReducer } from '.';

describe('test slice = profileSlice', () => {
  test('test change profile data - updateIsReadonly', () => {
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

    const state: ProfileSchema = {
      data,
      isLoading: false,
      isReadonly: true
    };

    expect(profileReducer(state, profileActions.setReadonly(false))).toEqual({
      data,
      isLoading: false,
      isReadonly: false
    });
  });

  test('test change profile data - updateProfile', () => {
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

    const state: ProfileSchema = {
      data,
      editedData: {},
      isLoading: false,
      isReadonly: true
    };

    expect(
      profileReducer(
        state,
        profileActions.updateProfile({ name: 'new name', surname: 'new surname', id: '1' })
      )
    ).toEqual({
      data,
      editedData: {
        id: '1',
        name: 'new name',
        surname: 'new surname'
      },
      isLoading: false,
      isReadonly: true
    });
  });

  test('test change profile data - cancelEdit', () => {
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

    const state: ProfileSchema = {
      data,
      editedData: {
        username: 'new username',
        name: 'new name',
        surname: 'new surname',
        age: 22,
        avatar: '',
        city: '',
        country: CountryEnum.RUSSIA,
        currency: CurrencyEnum.RUB
      },
      isLoading: false,
      isReadonly: false,
      validateErrors: [ValidateProfileError.NO_DATA]
    };

    expect(profileReducer(state, profileActions.cancelEdit())).toEqual({
      data,
      editedData: data,
      isLoading: false,
      isReadonly: true,
      validateErrors: []
    });
  });
});
