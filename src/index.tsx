import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import ThemeProvider from './theme/ThemeProvider';

import './styles/index.scss';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
