import { type FC, Suspense } from 'react';

import Navbar from '@/widgets/Navbar/ui/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { clsx } from '@/shared/lib/classNames';

import AppRouter from './providers/router/ui/AppRouter';

const App: FC = () => {
  return (
    <div className={clsx('app')}>
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
