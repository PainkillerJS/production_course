import { AboutPageAsync } from '@/pages/AboutPage';
import { MainPageAsync } from '@/pages/MainPage';
import { type RouteProps } from 'react-router-dom';

export enum AppRoute {
  MAIN = 'main',
  ABOUT = 'about',
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
];
