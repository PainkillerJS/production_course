import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from '@/entities/conter';
import { userReducer } from '@/entities/User';

import { type StateSchema } from './stateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
      user: userReducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
};

type StoreType = ReturnType<typeof createReduxStore>;
type RootState = ReturnType<StoreType['getState']>;
type AppDispatch = StoreType['dispatch'];

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
