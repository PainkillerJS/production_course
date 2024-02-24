import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import {
  type ArticleModel,
  ArticleEnumType,
  ArticleListView,
  ArticleSortField
} from '@/entities/Article';

import { getViewFromLocalStorage } from '@/shared/lib/storage/view';
import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';
import { type SortOrder } from '@/shared/types';

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
    _initied: false,
    limit: 9,
    sort: ArticleSortField.CREATED,
    search: '',
    order: 'asc',
    type: ArticleEnumType.ALL
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleListView>) => {
      state.view = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleEnumType>) => {
      state.type = action.payload;
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
      .addCase(getArticlesListThunk.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;

        if (action.meta.arg.isReplace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(getArticlesListThunk.fulfilled, (state, { payload, meta }) => {
        if (meta.arg.isReplace) {
          articlesAdapter.setAll(state, payload);
        } else {
          articlesAdapter.addMany(state, payload);
        }

        state.isLoading = false;
        state.isHasMore = payload.length >= state.limit!;
      })
      .addCase(getArticlesListThunk.rejected, (state, { payload }) => {
        state.error = payload?.message;
        state.isLoading = false;
      })
});

export const { reducer: articlesPageReducer, actions: articlesPageAction } = articlesPageSlice;
