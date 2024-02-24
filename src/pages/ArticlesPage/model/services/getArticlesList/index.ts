import { type AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ArticleModel, ArticleEnumType } from '@/entities/Article';

import { addQueryParams } from '@/shared/lib/url/addQueryParams';
import { type ThunkConfig } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getArticlesPageLimit } from '../../selectors/getArticlesPageLimit';
import { getArticlesPageNum } from '../../selectors/getArticlesPageNum';
import { getArticlesPageOrder } from '../../selectors/getArticlesPageOrder';
import { getArticlesPageSearch } from '../../selectors/getArticlesPageSearch';
import { getArticlesPageSort } from '../../selectors/getArticlesPageSort';
import { getArticlesPageType } from '../../selectors/getArticlesPageType';

interface getArticlesListThunkParams {
  isReplace?: boolean;
}

export const getArticlesListThunk = createAsyncThunk<
  ArticleModel[],
  getArticlesListThunkParams,
  ThunkConfig<AxiosError>
>('articlesPageSlice/getArticlesListThunk', async (_, { rejectWithValue, extra, getState }) => {
  const state = getState();

  const limit = getArticlesPageLimit(state);
  const sort = getArticlesPageSort(state);
  const order = getArticlesPageOrder(state);
  const search = getArticlesPageSearch(state);
  const page = getArticlesPageNum(state);
  const type = getArticlesPageType(state);

  try {
    addQueryParams({
      sort,
      order,
      search,
      type
    });

    const response = await extra.api.get<ArticleModel[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        q: search,
        type: type === ArticleEnumType.ALL ? undefined : type
      }
    });

    return response.data;
  } catch (e) {
    return rejectWithValue(e as AxiosError);
  }
});
