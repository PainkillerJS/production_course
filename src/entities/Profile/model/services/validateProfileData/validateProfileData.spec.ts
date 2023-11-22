import { CountryEnum } from '@/entities/Contries';
import { CurrencyEnum } from '@/entities/Currency';

import { type ProfileType, ValidateProfileError } from '../../types';

import { validateProfileData } from './validateProfileData';

describe('test validate function - validateProfileData', () => {
  test('no data test', async () => {
    expect(validateProfileData()).toEqual([ValidateProfileError.NO_DATA]);
  });

  test('user error', async () => {
    const profile: ProfileType = {
      id: '1',
      age: 1,
      avatar: '',
      city: 'test city',
      country: CountryEnum.RUSSIA,
      currency: CurrencyEnum.EUR,
      username: 'test user'
    };

    expect(validateProfileData(profile)).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('age error', async () => {
    const profile = {
      id: '1',
      age: '1',
      avatar: '',
      city: 'test city',
      country: CountryEnum.RUSSIA,
      currency: CurrencyEnum.EUR,
      username: 'test user',
      name: 'test name',
      surname: 'test surname'
    } as unknown as ProfileType;

    expect(validateProfileData(profile)).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('contry error', async () => {
    const profile = {
      age: 1,
      avatar: '',
      city: 'test city',
      currency: CurrencyEnum.EUR,
      username: 'test user',
      name: 'test name',
      surname: 'test surname'
    } as unknown as ProfileType;

    expect(validateProfileData(profile)).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('contry, user and age errors', async () => {
    const profile = {
      age: '1',
      avatar: '',
      city: 'test city',
      currency: CurrencyEnum.EUR,
      username: 'test user'
    } as unknown as ProfileType;

    expect(validateProfileData(profile)).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY
    ]);
  });
});
