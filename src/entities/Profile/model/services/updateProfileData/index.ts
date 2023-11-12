import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getProfileEditedData } from '../../selectors/getProfileEditedData';
import { type ProfileType, ValidateProfileError } from '../../types';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileDataThunk = createAsyncThunk<
  ProfileType,
  undefined,
  ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, { rejectWithValue, extra, getState }) => {
  const formData = getProfileEditedData(getState());

  const errors = validateProfileData(formData);

  if (errors.length) {
    return rejectWithValue(errors);
  }

  try {
    const response = await extra.api.put<ProfileType>('/profile', formData);

    return response.data;
  } catch (e) {
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
