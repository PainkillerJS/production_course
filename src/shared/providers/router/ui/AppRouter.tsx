import { type FC, Suspense, useCallback } from 'react';

import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';

import { type RouteConfigType, routeConfig } from '@/shared/config/routeConfig/routeConfig';

import { RequireAuth } from './RequireAuth';

const AppRouter: FC = () => {
  const renderWithWrapper = useCallback(({ path, element, isAuthOnly }: RouteConfigType) => {
    return (
      <Route
        key={path}
        path={path}
        element={isAuthOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  );
};

export default AppRouter;
