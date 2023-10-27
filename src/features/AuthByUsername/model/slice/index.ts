import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { loginByUsername } from '../services/loginByUsername';

export interface LoginSchema {
  username: string;
  password: string;
  isLoading: boolean;
  error?: string;
}

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.payload?.response?.data.message;
      })
});

export const { actions: loginAction, reducer: loginReducer } = loginSlice;
