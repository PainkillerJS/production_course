import { createSlice } from '@reduxjs/toolkit';

import { type Profile } from '../types';

export interface ProfileSchema {
  data?: Profile;
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
  reducers: {}
});

export const { actions: profileActions, reducer: profileReducer } = proflleSlice;
