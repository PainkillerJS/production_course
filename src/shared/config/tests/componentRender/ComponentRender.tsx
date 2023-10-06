import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { type DeepPartial } from '@reduxjs/toolkit';
import { type RenderResult, render } from '@testing-library/react';

import { StoreProvider } from '@/app/providers/StoreProvider';
import { type StateSchema } from '@/app/providers/StoreProvider/config/stateSchema';

import i18nForTest from '../../i18n/i18nForTest';

export interface ComponentOptionsType {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export const componentRender = (
  component: JSX.Element,
  options: ComponentOptionsType = {}
): RenderResult => {
  const { route = '/', initialState } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
};
