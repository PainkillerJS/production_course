import { type SVGProps, type VFC } from 'react';

import { type RouteProps } from 'react-router-dom';

import { AboutPageAsync } from '@/pages/AboutPage';
import { ArticlesDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { MainPageAsync } from '@/pages/MainPage';
import { NotFountPage } from '@/pages/NotFoundPage';
import { PageProfileAsync } from '@/pages/ProfilePage';

export enum AppRoute {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLES_CREATE = 'articles_create',
  ARTICLES_EDIT = 'articles_edit',
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
  [AppRoute.ARTICLES_CREATE]: '/articles/new',
  [AppRoute.ARTICLES_EDIT]: '/articles/:id/edit',
  [AppRoute.NOT_FOUND]: '*'
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
  },
  {
    path: `${routePath[AppRoute.ARTICLES_CREATE]}`,
    element: <ArticleEditPage />,
    isAuthOnly: true
  },
  {
    path: `${routePath[AppRoute.ARTICLES_EDIT]}`,
    element: <ArticleEditPage />,
    isAuthOnly: true
  },
  {
    path: routePath[AppRoute.NOT_FOUND],
    element: <NotFountPage />
  }
];
