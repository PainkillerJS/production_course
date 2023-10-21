import axios, { type AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { type UserState, userActions } from '@/entities/User';

import { setUserFromLocalStorage } from '@/shared/lib/storage/user';

interface LoginByUsernameParams {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  UserState,
  LoginByUsernameParams,
  { rejectValue: AxiosError }
>('login/loginByUsername', async (data, { rejectWithValue, dispatch }) => {
  try {
    const response = await axios.post<UserState>('http://localhost:8000/login', data);

    if (!response.data) {
      throw new Error();
    }

    setUserFromLocalStorage(response.data);
    dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    return rejectWithValue(e);
  }
});
