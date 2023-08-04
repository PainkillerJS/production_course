import { routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { Suspense, type FC } from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='page-wrapper'>
        <Routes>
          {routeConfig.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </Suspense>
  );
};

export default AppRouter;
