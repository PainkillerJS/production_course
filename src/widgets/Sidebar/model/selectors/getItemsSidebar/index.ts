import { createSelector } from '@reduxjs/toolkit';

import { getUserAuth } from '@/entities/User';

import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ArticlesIcon from '@/shared/assets/icons/article-20-20.svg';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import { type RouteType, AppRoute, routePath } from '@/shared/config/routeConfig/routeConfig';

export const getItemsSidebar = createSelector(getUserAuth, ({ id }) => {
  const paths: RouteType[] = [
    {
      path: routePath[AppRoute.MAIN],
      name: 'main',
      Icon: MainIcon
    },
    {
      path: routePath[AppRoute.ABOUT],
      name: 'about',
      Icon: AboutIcon
    }
  ];

  if (id) {
    paths.push(
      {
        path: `${routePath[AppRoute.PROFILE]}/${id}`,
        name: 'profile',
        Icon: ProfileIcon,
        isAuthOnly: true
      },
      {
        path: routePath[AppRoute.ARTICLES],
        name: 'articles',
        Icon: ArticlesIcon,
        isAuthOnly: true
      }
    );
  }

  return paths;
});
