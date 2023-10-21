import { type DeepPartial } from '@reduxjs/toolkit';
import { type Decorator } from '@storybook/react';

import { StoreProvider } from '@/shared/providers/StoreProvider';
import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const StoreDecorator =
  (state: DeepPartial<StateSchema>): Decorator =>
  (Story) => {
    return (
      <StoreProvider initialState={state}>
        <Story />
      </StoreProvider>
    );
  };
