import { type AxiosError } from 'axios';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { getArticleByIdThunk } from '../services/getArticleById';
import { type ArticleModel } from '../types';

export interface ArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: ArticleModel;
}

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
};

const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getArticleByIdThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
        state.data = undefined;
      })
      .addCase(getArticleByIdThunk.fulfilled, (state, { payload }: PayloadAction<ArticleModel>) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(
        getArticleByIdThunk.rejected,
        (state, { payload }: PayloadAction<AxiosError | undefined>) => {
          state.error = payload?.message;
          state.isLoading = false;
        }
      )
});

export const { actions: ArticleDetailsActions, reducer: articleDetailsReducer } =
  articleDetailsSlice;
