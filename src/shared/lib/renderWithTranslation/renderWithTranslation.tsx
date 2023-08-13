import { I18nextProvider } from 'react-i18next';

import { type RenderResult, render } from '@testing-library/react';

import i18nForTest from '../../config/i18n/i18nForTest';

export const renderWithTranslation = (component: JSX.Element): RenderResult => {
  return render(<I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>);
};
