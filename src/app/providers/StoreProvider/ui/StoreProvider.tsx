import { type ReactNode } from 'react';

import { Provider } from 'react-redux';
import { type DeepPartial } from '@reduxjs/toolkit';

import { createReduxStore } from '../config';
import { type StateSchema } from '../config/stateSchema';

interface StoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps): JSX.Element => {
  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
