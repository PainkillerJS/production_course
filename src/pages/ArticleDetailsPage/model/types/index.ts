import { type EntityState } from '@reduxjs/toolkit';

import { type ArticleModel } from '@/entities/Article';
import { type CommentModel } from '@/entities/Comment';

interface ArticleDetailsCommentsSchema extends EntityState<CommentModel> {
  isLoading?: boolean;
  error?: string;
}

interface ArticleDetailsRecomendationsSchema extends EntityState<ArticleModel> {
  isLoading?: boolean;
  error?: string;
}

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema;
  recommendations: ArticleDetailsRecomendationsSchema;
}
