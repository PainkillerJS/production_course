import { type EntityState } from '@reduxjs/toolkit';

import {
  type ArticleEnumType,
  type ArticleListView,
  type ArticleModel,
  type ArticleSortField
} from '@/entities/Article';

import { type SortOrder } from '@/shared/types';

export interface ArticlesPageSchema extends EntityState<ArticleModel> {
  view: ArticleListView;
  page: number;
  isHasMore: boolean;
  _initied: boolean;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleEnumType;
  limit?: number;
  isLoading?: boolean;
  error?: string;
}
