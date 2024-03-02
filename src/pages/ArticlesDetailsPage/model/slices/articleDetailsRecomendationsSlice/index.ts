import { type AxiosError } from 'axios';
import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { type ArticleModel } from '@/entities/Article';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getArticlesRecommendationsThunk } from '../../services/getArticlesRecommendations';
import { type ArticleDetailsPageSchema } from '../../types';

const articleDetailsRecomendationsAdapter = createEntityAdapter<ArticleModel>({
  selectId: (comment) => comment.id
});

export const getArticleRecomendations =
  articleDetailsRecomendationsAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleDetailsPage?.recommendations ||
      articleDetailsRecomendationsAdapter.getInitialState()
  );

const articleDetailsRecomendationsSlice = createSlice({
  name: 'articleRecomendationsComments',
  initialState: articleDetailsRecomendationsAdapter.getInitialState<
    ArticleDetailsPageSchema['recommendations']
  >({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getArticlesRecommendationsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
        state.ids = [];
        state.entities = {};
      })
      .addCase(
        getArticlesRecommendationsThunk.fulfilled,
        (state, { payload }: PayloadAction<ArticleModel[]>) => {
          state.isLoading = false;
          articleDetailsRecomendationsAdapter.setAll(state, payload);
        }
      )
      .addCase(
        getArticlesRecommendationsThunk.rejected,
        (state, { payload }: PayloadAction<AxiosError | undefined>) => {
          state.isLoading = false;
          state.error = payload?.message ?? 'The server error';
        }
      )
});

export const {
  reducer: articleDetailsRecomendationsReducer,
  actions: articleDetailsRecomendationsAction
} = articleDetailsRecomendationsSlice;
