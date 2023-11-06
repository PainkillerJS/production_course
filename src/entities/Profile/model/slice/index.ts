import { type AxiosError } from 'axios';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { profileDataThunk } from '../services/profileData';
import { updateProfileDataThunk } from '../services/updateProfileData';
import { type ProfileType } from '../types';

const pendingCallback = (state: ProfileSchema) => {
  state.isLoading = true;
  state.error = undefined;
};

const fulfilledCallback = (state: ProfileSchema, action: PayloadAction<ProfileType>) => {
  state.isLoading = false;
  state.data = action.payload;
  state.editedData = action.payload;
  state.isReadonly = true;
};

const rejectedCallback = (state: ProfileSchema, action: PayloadAction<AxiosError | undefined>) => {
  state.isLoading = false;
  state.error = action.payload?.response?.data.message;
};

export interface ProfileSchema {
  data?: ProfileType;
  editedData?: ProfileType;
  isLoading: boolean;
  isReadonly: boolean;
  error?: string;
}

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  isReadonly: true,
  error: undefined
};

const proflleSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.isReadonly = action.payload;
    },
    updateProfile: (state, action: PayloadAction<ProfileType>) => {
      state.editedData = {
        ...state.editedData,
        ...action.payload
      };
    },
    cancelEdit: (state) => {
      state.isReadonly = true;
      state.editedData = state.data;
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(profileDataThunk.pending, pendingCallback)
      .addCase(profileDataThunk.fulfilled, fulfilledCallback)
      .addCase(profileDataThunk.rejected, rejectedCallback)
      .addCase(updateProfileDataThunk.pending, pendingCallback)
      .addCase(updateProfileDataThunk.fulfilled, fulfilledCallback)
      .addCase(updateProfileDataThunk.rejected, rejectedCallback)
});

export const { actions: profileActions, reducer: profileReducer } = proflleSlice;
