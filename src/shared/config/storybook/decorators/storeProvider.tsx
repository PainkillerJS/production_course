import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit';
import { type Decorator } from '@storybook/react';

import { loginReducer } from '@/features/AuthByUsername';

import { StoreProvider } from '@/shared/providers/StoreProvider';
import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  login: loginReducer
};

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  ): Decorator =>
  (Story) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <Story />
      </StoreProvider>
    );
