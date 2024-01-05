import { type AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ArticleModel } from '@/entities/Article';

import { type ThunkConfig } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getArticlesPageLimit } from '../../selectors/getArticlesPageLimit';

interface GetArticlesListThunkParams {
  page?: number;
}

export const getArticlesListThunk = createAsyncThunk<
  ArticleModel[],
  GetArticlesListThunkParams,
  ThunkConfig<AxiosError>
>(
  'articlesPageSlice/getArticlesListThunk',
  async ({ page }, { rejectWithValue, extra, getState }) => {
    const limit = getArticlesPageLimit(getState());

    try {
      const response = await extra.api.get<ArticleModel[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page
        }
      });

      return response.data;
    } catch (e) {
      return rejectWithValue(e as AxiosError);
    }
  }
);
