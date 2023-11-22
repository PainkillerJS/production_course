import { type AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/shared/providers/StoreProvider/config/stateSchema';

import { type ProfileType } from '../../types';

export const profileDataThunk = createAsyncThunk<ProfileType, string, ThunkConfig<AxiosError>>(
  'profile/getProfileData',
  async (profileId, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get<ProfileType>(`/profile/${profileId}`);

      return response.data;
    } catch (e) {
      return rejectWithValue(e as AxiosError);
    }
  }
);
