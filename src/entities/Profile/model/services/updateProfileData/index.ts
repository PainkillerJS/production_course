import { type AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getProfileEditedData } from '../../selectors/getProfileEditedData';
import { type ProfileType } from '../../types';

export const updateProfileDataThunk = createAsyncThunk<
  ProfileType,
  undefined,
  ThunkConfig<AxiosError>
>('profile/updateProfileData', async (_, { rejectWithValue, extra, getState }) => {
  try {
    const formData = getProfileEditedData(getState());

    const response = await extra.api.put<ProfileType>('/profile', formData);

    return response.data;
  } catch (e) {
    return rejectWithValue(e as AxiosError);
  }
});
