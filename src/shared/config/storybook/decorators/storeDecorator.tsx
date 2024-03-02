import { type DeepPartial } from '@reduxjs/toolkit';
import { type Decorator } from '@storybook/react';

import { type ReducersList } from '@/shared/lib/DynamicModuleLoader';
import { StoreProvider } from '@/shared/providers/StoreProvider';
import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const StoreDecorator =
  (state?: DeepPartial<StateSchema>, asyncReducers?: ReducersList): Decorator =>
  (Story) => {
    return (
      // @ts-expect-error

      <StoreProvider initialState={state} asyncReducers={asyncReducers}>
        <Story />
      </StoreProvider>
    );
  };
