import { type AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ArticleModel } from '@/entities/Article';

import { type ThunkConfig } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getArticlesListThunk = createAsyncThunk<ArticleModel[], void, ThunkConfig<AxiosError>>(
  'articlesPageSlice/getArticlesListThunk',
  async (articleId, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get<ArticleModel[]>('/articles', {
        params: {
          _expand: 'user'
        }
      });

      return response.data;
    } catch (e) {
      return rejectWithValue(e as AxiosError);
    }
  }
);
