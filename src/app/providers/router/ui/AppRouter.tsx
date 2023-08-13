import { type FC,Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import PageLoader from '@/widgets/PageLoader/PageLoader';

import { routeConfig } from '@/shared/config/routeConfig/routeConfig';

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
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
