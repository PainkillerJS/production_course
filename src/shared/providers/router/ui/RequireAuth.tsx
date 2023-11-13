import { type ReactNode } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { getUserAuthUsername } from '@/entities/User';

import { AppRoute, routePath } from '@/shared/config/routeConfig/routeConfig';

import { useAppSelector } from '../../StoreProvider';

interface RequireAuthProps {
  children: ReactNode;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const auth = useAppSelector(getUserAuthUsername);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={routePath[AppRoute.MAIN]} state={{ from: location }} replace />;
  }

  return children;
};
