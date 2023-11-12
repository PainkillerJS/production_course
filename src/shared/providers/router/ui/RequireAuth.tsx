import { type ReactNode } from 'react';

import { Navigate, useLocation } from 'react-router-dom';

import { getUserAuth } from '@/entities/User';

import { AppRoute } from '@/shared/config/routeConfig/routeConfig';

import { useAppSelector } from '../../StoreProvider';

interface RequireAuthProps {
  children: ReactNode;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const auth = useAppSelector(getUserAuth);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={AppRoute.MAIN} state={{ from: location }} replace />;
  }

  return children;
};
