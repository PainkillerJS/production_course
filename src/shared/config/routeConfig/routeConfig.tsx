import { type SVGProps, type VFC } from 'react';

import { type RouteProps } from 'react-router-dom';

import { AboutPageAsync } from '@/pages/AboutPage';
import { ArticlesDetailsPage } from '@/pages/ArticlesDetailsPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { MainPageAsync } from '@/pages/MainPage';
import { NotFountPage } from '@/pages/NotFoundPage';
import { PageProfileAsync } from '@/pages/ProfilePage';

import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ArticlesIcon from '@/shared/assets/icons/article-20-20.svg';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';

export enum AppRoute {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  NOT_FOUND = 'not_found'
}

interface AuthType {
  isAuthOnly?: boolean;
}

export interface RouteType extends AuthType {
  path: string;
  name: string;
  Icon?: VFC<SVGProps<SVGSVGElement>>;
}

export interface RouteConfigType extends Pick<RouteProps, 'element' | 'path'>, AuthType {}

export const routePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: '/',
  [AppRoute.ABOUT]: '/about',
  [AppRoute.PROFILE]: '/profile',
  [AppRoute.ARTICLES]: '/articles',
  [AppRoute.NOT_FOUND]: '*'
};

export const routePathNavigation: Partial<Record<keyof typeof routePath, RouteType>> = {
  [AppRoute.MAIN]: {
    path: routePath[AppRoute.MAIN],
    name: 'main',
    Icon: MainIcon
  },
  [AppRoute.ABOUT]: {
    path: routePath[AppRoute.ABOUT],
    name: 'about',
    Icon: AboutIcon
  },
  [AppRoute.PROFILE]: {
    path: routePath[AppRoute.PROFILE],
    name: 'profile',
    Icon: ProfileIcon,
    isAuthOnly: true
  },
  [AppRoute.ARTICLES]: {
    path: routePath[AppRoute.ARTICLES],
    name: 'articles',
    Icon: ArticlesIcon,
    isAuthOnly: true
  }
};

export const routeConfig: RouteConfigType[] = [
  {
    path: routePath[AppRoute.MAIN],
    element: <MainPageAsync />
  },
  {
    path: routePath[AppRoute.ABOUT],
    element: <AboutPageAsync />
  },
  {
    path: routePath[AppRoute.NOT_FOUND],
    element: <NotFountPage />
  },
  {
    path: `${routePath[AppRoute.PROFILE]}/:id`,
    element: <PageProfileAsync />,
    isAuthOnly: true
  },
  {
    path: routePath[AppRoute.ARTICLES],
    element: <ArticlesPage />,
    isAuthOnly: true
  },
  {
    path: `${routePath[AppRoute.ARTICLES]}/:id`,
    element: <ArticlesDetailsPage />,
    isAuthOnly: true
  }
];
