import { type AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getArticlesPageIsHasMore } from '../../selectors/getArticlesPageIsHasMore';
import { getArticlesPageIsLoading } from '../../selectors/getArticlesPageIsLoading';
import { getArticlesPageNum } from '../../selectors/getArticlesPageNum';
import { articlesPageAction } from '../../slices';
import { getArticlesListThunk } from '../getArticlesList';

export const getNextArticlesListThunk = createAsyncThunk<void, void, ThunkConfig<AxiosError>>(
  'articlesPageSlice/getNextArticlesListThunk',
  async (_, { getState, dispatch }) => {
    const state = getState();

    const isHasMore = getArticlesPageIsHasMore(state);
    const page = getArticlesPageNum(state);
    const isLoading = getArticlesPageIsLoading(state);

    if (isHasMore && !isLoading) {
      dispatch(articlesPageAction.setPage(page + 1));
      dispatch(
        getArticlesListThunk({
          page: page + 1
        })
      );
    }
  }
);
