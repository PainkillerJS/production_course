import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { getUsetFromLocalStorage, removeUserFromLocalStorage } from '@/shared/lib/storage/user';

export interface UserState {
  id?: string | number;
  username?: string;
}

const initialState: UserState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<UserState>) => {
      Object.assign(state, action.payload);
    },
    initAuthData: (state) => {
      const user = getUsetFromLocalStorage();

      if (user) {
        Object.assign(state, user);
      }
    },
    logout: (state) => {
      state = {};
      removeUserFromLocalStorage();

      return state;
    }
  }
});

export const { actions: userActions, reducer: userReducer } = userSlice;
