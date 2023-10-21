import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { loginReducer } from '@/features/AuthByUsername/model/slice';

import { userReducer } from '@/entities/User';

import { type StateSchema } from './stateSchema';

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {
      user: userReducer,
      login: loginReducer
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
