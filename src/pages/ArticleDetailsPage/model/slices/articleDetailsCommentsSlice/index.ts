import { type AxiosError } from 'axios';
import { type PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { type CommentModel } from '@/entities/Comment';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getCommentsByArticleIdThunk } from '../../services/getCommentsByArticleId';
import { type ArticleDetailsPageSchema } from '../../types';

const articleDetailsCommentsAdapter = createEntityAdapter<CommentModel>({
  selectId: (comment) => comment.id
});

export const getArticleComments = articleDetailsCommentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.comments || articleDetailsCommentsAdapter.getInitialState()
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: articleDetailsCommentsAdapter.getInitialState<ArticleDetailsPageSchema['comments']>(
    {
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {}
    }
  ),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getCommentsByArticleIdThunk.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
        state.ids = [];
        state.entities = {};
      })
      .addCase(
        getCommentsByArticleIdThunk.fulfilled,
        (state, { payload }: PayloadAction<CommentModel[]>) => {
          state.isLoading = false;
          articleDetailsCommentsAdapter.setAll(state, payload);
        }
      )
      .addCase(
        getCommentsByArticleIdThunk.rejected,
        (state, { payload }: PayloadAction<AxiosError | undefined>) => {
          state.isLoading = false;
          state.error = payload?.message ?? 'The server error';
        }
      )
});

export const { reducer: articleDetailsCommentsReducer, actions: articleDetailsCommentsAction } =
  articleDetailsCommentsSlice;
