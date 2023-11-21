import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { getUsetFromLocalStorage, removeUserFromLocalStorage } from '@/shared/lib/storage/user';

export interface UserState {
  id?: string | number;
  username?: string;
  avatar?: string;
  _initied: boolean;
}

const initialState: UserState = {
  _initied: false
};

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
      state._initied = true;
    },
    logout: (state) => {
      state = { _initied: state._initied };
      removeUserFromLocalStorage();

      return state;
    }
  }
});

export const { actions: userActions, reducer: userReducer } = userSlice;
