import { type FC, Suspense, useEffect } from 'react';

import Navbar from '@/widgets/Navbar/ui/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { userActions } from '@/entities/User';

import { clsx } from '@/shared/lib/classNames';
import AppRouter from '@/shared/providers/router/ui/AppRouter';
import { useAppDispatch } from '@/shared/providers/StoreProvider';

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
