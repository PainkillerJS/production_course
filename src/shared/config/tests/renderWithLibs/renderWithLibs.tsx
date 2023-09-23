import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { type RenderResult, render } from '@testing-library/react';

import i18nForTest from '../../i18n/i18nForTest';

export const renderWithLibs = (component: JSX.Element): RenderResult => {
  return render(
    <I18nextProvider i18n={i18nForTest}>
      <BrowserRouter>{component}</BrowserRouter>
    </I18nextProvider>
  );
};
