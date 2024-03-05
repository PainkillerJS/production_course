import { createSelector } from '@reduxjs/toolkit';

import { getArticleDetailsData } from '@/entities/Article';
import { getUserAuth } from '@/entities/User';

export const getCanEditArticle = createSelector(
  getUserAuth,
  getArticleDetailsData,
  (user, article) => {
    if (!article || !user) {
      return false;
    }

    return article.user.id === user.id;
  }
);
