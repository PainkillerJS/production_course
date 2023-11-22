import { CountryEnum } from '@/entities/Contries';
import { CurrencyEnum } from '@/entities/Currency';

import { TestAsyncThunk } from '@/shared/config/tests/testAsyncThunk';

import { type ProfileType } from '../../types';

import { updateProfileDataThunk } from '.';

describe('test asyncThunk - updateProfileDataThunk', () => {
  test('update profile data', async () => {
    const profileData: ProfileType = {
      id: '1',
      name: 'Yuriy',
      surname: 'Yuriy',
      age: 22,
      currency: CurrencyEnum.RUB,
      country: CountryEnum.RUSSIA,
      city: 'Moscow',
      username: 'admin',
      avatar: ''
    };

    const thunk = new TestAsyncThunk(updateProfileDataThunk, {
      profile: {
        editedData: profileData,
        isReadonly: true,
        isLoading: false
      }
    });

    thunk.api.put.mockReturnValue(
      Promise.resolve({ data: { ...profileData, name: 'new Yuriy', surname: 'new Yuriy' } })
    );

    const result = await thunk.callThunk(undefined);

    expect(thunk.api.put).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual({ ...profileData, name: 'new Yuriy', surname: 'new Yuriy' });
  });
});
