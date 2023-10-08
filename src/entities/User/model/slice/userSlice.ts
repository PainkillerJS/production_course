import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  authData?: {
    id: string;
    username: string;
  };
}

const initialState: UserState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
});

export const { actions: userActions, reducer: userReducer } = userSlice;
