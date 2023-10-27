import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { type NavigateOptions, type To } from 'react-router-dom';
import {
  type CombinedState,
  type Reducer,
  type ReducersMapObject,
  configureStore
} from '@reduxjs/toolkit';

import { userReducer } from '@/entities/User';

import { $api } from '@/shared/api/api';

import { createReducerManager } from './reducerManager';
import { type StateSchema, type ThunkExtraArg } from './stateSchema';

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArgs: ThunkExtraArg = {
    api: $api,
    navigate
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArgs
        }
      })
  });

  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
};

type StoreType = ReturnType<typeof createReduxStore>;
type RootState = ReturnType<StoreType['getState']>;
type AppDispatch = StoreType['dispatch'];

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
