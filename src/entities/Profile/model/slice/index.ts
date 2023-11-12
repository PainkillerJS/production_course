import { type AxiosError } from 'axios';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { profileDataThunk } from '../services/profileData';
import { updateProfileDataThunk } from '../services/updateProfileData';
import { type ProfileType, type ValidateProfileError } from '../types';

export interface ProfileSchema {
  data?: ProfileType;
  editedData?: ProfileType;
  isLoading: boolean;
  isReadonly: boolean;
  error?: string;
  validateErrors?: ValidateProfileError[];
}

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  isReadonly: true,
  error: undefined,
  validateErrors: []
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
      state.validateErrors = [];
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(profileDataThunk.pending, (state: ProfileSchema) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        profileDataThunk.fulfilled,
        (state: ProfileSchema, action: PayloadAction<ProfileType>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.editedData = action.payload;
          state.isReadonly = true;
        }
      )
      .addCase(
        profileDataThunk.rejected,
        (state: ProfileSchema, action: PayloadAction<AxiosError | undefined>) => {
          state.isLoading = false;
          state.validateErrors = [action.payload?.response?.data.message];
        }
      )
      .addCase(updateProfileDataThunk.pending, (state: ProfileSchema) => {
        state.isLoading = true;
        state.validateErrors = [];
      })
      .addCase(
        updateProfileDataThunk.fulfilled,
        (state: ProfileSchema, action: PayloadAction<ProfileType>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.editedData = action.payload;
          state.isReadonly = true;
          state.validateErrors = [];
        }
      )
      .addCase(
        updateProfileDataThunk.rejected,
        (state: ProfileSchema, action: PayloadAction<ValidateProfileError[] | undefined>) => {
          state.isLoading = false;
          state.validateErrors = action.payload;
        }
      )
});

export const { actions: profileActions, reducer: profileReducer } = proflleSlice;
