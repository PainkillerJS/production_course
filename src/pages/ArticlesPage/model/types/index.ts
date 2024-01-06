import { type EntityState } from '@reduxjs/toolkit';

import { type ArticleListView, type ArticleModel } from '@/entities/Article';

export interface ArticlesPageSchema extends EntityState<ArticleModel> {
  view: ArticleListView;
  page: number;
  isHasMore: boolean;
  _initied: boolean;
  limit?: number;
  isLoading?: boolean;
  error?: string;
}
