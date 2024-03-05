import { type AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ArticleModel } from '@/entities/Article';

import { type ThunkConfig } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getArticlesRecommendationsThunk = createAsyncThunk<
  ArticleModel[],
  void,
  ThunkConfig<AxiosError>
>(
  'articleRecomendationsComments/getArticlesRecommendationsThunk',
  async (_, { rejectWithValue, extra }) => {
    try {
      const response = await extra.api.get<ArticleModel[]>('/articles', {
        params: {
          _limit: 4
        }
      });

      return response.data;
    } catch (e) {
      return rejectWithValue(e as AxiosError);
    }
  }
);
