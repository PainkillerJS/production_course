import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/app';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

import PageError from '@/widgets/PageError/ui/PageError';

import '@/shared/config/i18n/i18n';

import '@/app/styles/index.scss';

const root = createRoot(document.getElementById('root'));

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
