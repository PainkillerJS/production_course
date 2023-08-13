import { type FC,Suspense } from 'react';

import Navbar from '@/widgets/Navbar/ui/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { useTheme } from '@/shared/ui/ThemeSwitcher';

import { clsx } from '../shared/lib/helpers/classNames';

import AppRouter from './providers/router/ui/AppRouter';

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
