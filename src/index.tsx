import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/app';

import PageError from '@/widgets/PageError/ui/PageError';

import { ErrorBoundary } from '@/shared/providers/ErrorBoundary';
import { StoreProvider } from '@/shared/providers/StoreProvider';
import { ThemeProvider } from '@/shared/providers/ThemeProvider';

import '@/shared/config/i18n/i18n';

import '@/app/styles/index.scss';

const root = createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <ErrorBoundary fallback={<PageError />}>
      <StoreProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StoreProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
