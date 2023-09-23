import { I18nextProvider } from 'react-i18next';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { type RenderResult, render } from '@testing-library/react';

import i18nForTest from '../../i18n/i18nForTest';

export interface ComponentOptionsType {
  route?: string;
}

export const ComponentRender = (
  component: JSX.Element,
  options: ComponentOptionsType = {}
): RenderResult => {
  const { route = '/' } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTest}>
        <BrowserRouter>{component}</BrowserRouter>
      </I18nextProvider>
    </MemoryRouter>
  );
};
