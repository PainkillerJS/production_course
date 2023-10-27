import { createSlice } from '@reduxjs/toolkit';

import { profileDataThunk } from '../services/profileData';
import { type ProfileType } from '../types';

export interface ProfileSchema {
  data?: ProfileType;
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
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(profileDataThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(profileDataThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(profileDataThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.response?.data.message;
      })
});

export const { actions: profileActions, reducer: profileReducer } = proflleSlice;
