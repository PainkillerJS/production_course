import { type AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getArticlesPageIsInited } from '../../selectors/getArticlesPageIsInited';
import { articlesPageAction } from '../../slices';
import { getArticlesListThunk } from '../getArticlesList';

enum SEARCH_PARAMS {
  'order' = 'order',
  'sort' = 'sort',
  'search' = 'search',
  'type' = 'type'
}

type MethodsArticlesPageForFiltersType = Exclude<
  keyof typeof articlesPageAction,
  'initState' | 'setView' | 'setPage'
>;

const searchParamsList: Array<keyof typeof SEARCH_PARAMS> = ['order', 'sort', 'search', 'type'];

const methodHash: Record<SEARCH_PARAMS, MethodsArticlesPageForFiltersType> = {
  order: 'setOrder',
  search: 'setSearch',
  sort: 'setOrder',
  type: 'setType'
};

export const updateInitedArticlesPageThunk = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<AxiosError>
>(
  'articlesPageSlice/updateInitedArticlesPageThunk',
  async (searchParams, { getState, dispatch }) => {
    const isInited = getArticlesPageIsInited(getState());

    if (!isInited) {
      searchParamsList.forEach((param) => {
        const paramFromUrl = searchParams.get(param);

        if (paramFromUrl) {
          const method = articlesPageAction[methodHash[param]];

          // @ts-expect-error
          dispatch(method(paramFromUrl));
        }
      });

      dispatch(articlesPageAction.initState());
      dispatch(getArticlesListThunk({}));
    }
  }
);
