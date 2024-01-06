import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { type SafeScrollSchema } from '../types';

const initialState: SafeScrollSchema = {};

const safeScrollSlice = createSlice({
  name: 'safeScroll',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      state[payload.path] = payload.position;
    }
  }
});

export const { reducer: safeScrollReducer, actions: safeScrollAction } = safeScrollSlice;
