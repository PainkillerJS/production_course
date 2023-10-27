import { type AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { type UserState, userActions } from '@/entities/User';

import { setUserFromLocalStorage } from '@/shared/lib/storage/user';
import { type ThunkConfig } from '@/shared/providers/StoreProvider/config/stateSchema';

interface LoginByUsernameParams {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  UserState,
  LoginByUsernameParams,
  ThunkConfig<AxiosError>
>('login/loginByUsername', async (data, { rejectWithValue, dispatch, extra }) => {
  try {
    const response = await extra.api.post<UserState>('/login', data);

    if (!response.data) {
      throw new Error();
    }

    setUserFromLocalStorage(response.data);
    dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    return rejectWithValue(e as AxiosError);
  }
});
