import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { type ArticleModel, ArticleListView } from '@/entities/Article';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getArticlesListThunk } from '../services/getArticlesList';
import { type ArticlesPageSchema } from '../types';

const articlesAdapter = createEntityAdapter<ArticleModel>({
  selectId: (articles) => articles.id
});

export const getArticlesAdapter = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    view: ArticleListView.SMALL,
    ids: [],
    entities: {}
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleListView>) => {
      state.view = action.payload;
    }
  },
  extraReducers: (buider) =>
    buider
      .addCase(getArticlesListThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
        state.ids = [];
        state.entities = {};
      })
      .addCase(getArticlesListThunk.fulfilled, (state, { payload }) => {
        articlesAdapter.setAll(state, payload);
        state.isLoading = false;
      })
      .addCase(getArticlesListThunk.rejected, (state, { payload }) => {
        state.error = payload?.message;
        state.isLoading = false;
      })
});

export const { reducer: articlesPageReducer, actions: articlesPageAction } = articlesPageSlice;
