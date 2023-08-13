import { type RouteProps } from 'react-router-dom';

import { AboutPageAsync } from '@/pages/AboutPage';
import { MainPageAsync } from '@/pages/MainPage';
import { NotFountPage } from '@/pages/NotFoundPage';

export enum AppRoute {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

interface RouteType {
  path: string;
  name: string;
}

export const routePath: Record<AppRoute, RouteType> = {
  [AppRoute.MAIN]: {
    path: '/',
    name: 'Главная',
  },
  [AppRoute.ABOUT]: {
    path: '/about',
    name: 'О нас',
  },
  [AppRoute.NOT_FOUND]: {
    path: '*',
    name: 'not_found',
  },
};

export const routeConfig: RouteProps[] = [
  {
    path: routePath.main.path,
    element: <MainPageAsync />,
  },
  {
    path: routePath.about.path,
    element: <AboutPageAsync />,
  },
  {
    path: routePath.not_found.path,
    element: <NotFountPage />,
  },
];
