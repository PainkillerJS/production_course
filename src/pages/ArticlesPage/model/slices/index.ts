import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { type ArticleModel, ArticleListView } from '@/entities/Article';

import { getViewFromLocalStorage } from '@/shared/lib/storage/view';
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
    entities: {},
    page: 1,
    isHasMore: true,
    _initied: false
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleListView>) => {
      state.view = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state) => {
      const view = getViewFromLocalStorage() ?? ArticleListView.SMALL;
      state.view = view;
      state.limit = view === ArticleListView.BIG ? 4 : 9;
      state._initied = true;
    }
  },
  extraReducers: (buider) =>
    buider
      .addCase(getArticlesListThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getArticlesListThunk.fulfilled, (state, { payload }) => {
        articlesAdapter.addMany(state, payload);
        state.isLoading = false;
        state.isHasMore = payload.length > 0;
      })
      .addCase(getArticlesListThunk.rejected, (state, { payload }) => {
        state.error = payload?.message;
        state.isLoading = false;
      })
});

export const { reducer: articlesPageReducer, actions: articlesPageAction } = articlesPageSlice;
