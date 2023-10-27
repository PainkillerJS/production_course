import { type DeepPartial } from '@reduxjs/toolkit';
import { type Decorator } from '@storybook/react';

import { loginReducer } from '@/features/AuthByUsername';

import { type ReducersList } from '@/shared/lib/DynamicModuleLoader';
import { StoreProvider } from '@/shared/providers/StoreProvider';
import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

const defaultAsyncReducers: ReducersList = {
  login: loginReducer
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList): Decorator =>
  (Story) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <Story />
      </StoreProvider>
    );
