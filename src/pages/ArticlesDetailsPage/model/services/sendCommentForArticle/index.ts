import { type AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { addCommentFormAction } from '@/features/AddCommentForm';

import { getArticleDetailsData } from '@/entities/Article';
import { type CommentModel } from '@/entities/Comment';
import { getUserAuth } from '@/entities/User';

import { type ThunkConfig } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getCommentsByArticleIdThunk } from '../getCommentsByArticleId';

export const sendCommentForArticle = createAsyncThunk<
  CommentModel,
  string,
  ThunkConfig<AxiosError>
>('addCommentForm/sendComment', async (comment, { extra, rejectWithValue, dispatch, getState }) => {
  const userData = getUserAuth(getState());
  const articleId = getArticleDetailsData(getState());

  if (!userData || !articleId) {
    return rejectWithValue({ message: 'No data' } as AxiosError);
  }

  try {
    const response = await extra.api.post<CommentModel>('/comments', {
      articleId,
      userId: userData.id,
      text: comment
    });

    dispatch(addCommentFormAction.setText(''));
    dispatch(getCommentsByArticleIdThunk());

    return response.data;
  } catch (e) {
    return rejectWithValue(e as AxiosError);
  }
});
