import { type EntityState } from '@reduxjs/toolkit';

import { type ArticleListView, type ArticleModel } from '@/entities/Article';

export interface ArticlesPageSchema extends EntityState<ArticleModel> {
  view: ArticleListView;
  isLoading?: boolean;
  error?: string;
}
