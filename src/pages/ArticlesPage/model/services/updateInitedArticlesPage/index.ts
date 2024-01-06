import { type AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getArticlesPageIsInited } from '../../selectors/getArticlesPageIsInited';
import { articlesPageAction } from '../../slices';
import { getArticlesListThunk } from '../getArticlesList';

export const updateInitedArticlesPageThunk = createAsyncThunk<void, void, ThunkConfig<AxiosError>>(
  'articlesPageSlice/updateInitedArticlesPageThunk',
  async (_, { getState, dispatch }) => {
    const isInited = getArticlesPageIsInited(getState());

    if (!isInited) {
      dispatch(articlesPageAction.initState());
      dispatch(
        getArticlesListThunk({
          page: 1
        })
      );
    }
  }
);
