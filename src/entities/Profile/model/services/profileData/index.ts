import { type AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/shared/providers/StoreProvider/config/stateSchema';

import { type ProfileType } from '../../types';

export const profileDataThunk = createAsyncThunk<ProfileType, undefined, ThunkConfig<AxiosError>>(
  'profile/getProfileData',
  async (_, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get<ProfileType>('/profile');

      return response.data;
    } catch (e) {
      return rejectWithValue(e as AxiosError);
    }
  }
);
