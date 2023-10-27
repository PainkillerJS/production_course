import { type ReactNode } from 'react';

import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit';

import { createReduxStore } from '../config';
import { type StateSchema } from '../config/stateSchema';

interface StoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = ({
  children,
  initialState,
  asyncReducers
}: StoreProviderProps): JSX.Element => {
  const navigate = useNavigate();

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
    navigate
  );

  return <Provider store={store}>{children}</Provider>;
};
