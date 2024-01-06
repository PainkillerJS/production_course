import { type AxiosInstance } from 'axios';
import {
  type AnyAction,
  type CombinedState,
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject
} from '@reduxjs/toolkit';

import { type ArticleDetailsCommentsSchema } from '@/pages/ArticlesDetailsPage';
import { type ArticlesPageSchema } from '@/pages/ArticlesPage';

import { type AddCommentFormSchema } from '@/features/AddCommentForm';
import { type LoginSchema } from '@/features/AuthByUsername/model/slice';
import { type SafeScrollSchema } from '@/features/SafeScroll';

import { type ArticleDetailsSchema } from '@/entities/Article';
import { type ProfileSchema } from '@/entities/Profile';
import { type UserState } from '@/entities/User';

export interface StateSchema {
  user: UserState;
  safeScroll: SafeScrollSchema;

  // Асинхроные редюсеры
  login?: LoginSchema;
  profile?: ProfileSchema;
  articles?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
