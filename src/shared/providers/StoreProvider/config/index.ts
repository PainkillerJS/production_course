import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { userReducer } from '@/entities/User';

import { createReducerManager } from './reducerManager';
import { type StateSchema } from './stateSchema';

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
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
