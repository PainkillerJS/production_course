import { Suspense, type FC } from 'react';

import { clsx } from '../shared/lib/helpers/classNames';
import AppRouter from './providers/router/ui/AppRouter';
import Navbar from '@/widgets/Navbar/ui/Navbar';
import { useTheme } from '@/shared/ui/ThemeSwitcher';
import { Sidebar } from '@/widgets/Sidebar';

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={clsx('app', theme)}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
