import { type AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { type CommentModel } from '@/entities/Comment';

import { type ThunkConfig } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getCommentsByArticleIdThunk = createAsyncThunk<
  CommentModel[],
  string | undefined,
  ThunkConfig<AxiosError>
>(
  'articleDetailsComments/getCommentsByArticleId',
  async (articleId, { rejectWithValue, extra }) => {
    if (!articleId) {
      return rejectWithValue({
        message: 'The article id is undefined'
      } as AxiosError);
    }

    try {
      const response = await extra.api.get<CommentModel[]>('/comments', {
        params: {
          articleId,
          _expand: 'user'
        }
      });

      return response.data;
    } catch (e) {
      return rejectWithValue(e as AxiosError);
    }
  }
);
