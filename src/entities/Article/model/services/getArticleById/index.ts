import { type AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/shared/providers/StoreProvider/config/stateSchema';

import { type ArticleModel } from '../../types';

export const getArticleByIdThunk = createAsyncThunk<ArticleModel, string, ThunkConfig<AxiosError>>(
  'articleDetails/getArticleById',
  async (id, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get<ArticleModel>(`/articles/${id}`);

      return response.data;
    } catch (e) {
      return rejectWithValue(e as AxiosError);
    }
  }
);
