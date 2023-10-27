import { TestAsyncThunk } from '@/shared/config/tests/testAsyncThunk';
import { CountryEnum, CurrencyEnum } from '@/shared/constants/profile';

import { type ProfileType } from '../../types';

import { profileDataThunk } from '.';

describe('test asyncThunk - profileDataThunk', () => {
  test('get profile data', async () => {
    const profileData: ProfileType = {
      name: 'Yuriy',
      surname: 'Yuriy',
      age: 22,
      currency: CurrencyEnum.RUB,
      country: CountryEnum.RUSSIA,
      city: 'Moscow',
      username: 'admin',
      avatar: ''
    };

    const thunk = new TestAsyncThunk(profileDataThunk);

    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }));

    const result = await thunk.callThunk(undefined);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileData);
  });
});
