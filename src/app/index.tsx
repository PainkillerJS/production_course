import { type FC, Suspense, useEffect } from 'react';

import Navbar from '@/widgets/Navbar/ui/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { getUserInited, userActions } from '@/entities/User';

import { clsx } from '@/shared/lib/classNames';
import AppRouter from '@/shared/providers/router/ui/AppRouter';
import { useAppDispatch, useAppSelector } from '@/shared/providers/StoreProvider';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const inited = useAppSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={clsx('app')}>
      <Suspense fallback=''>
        <Navbar />

        <div className='content-page'>
          <Sidebar />

          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
