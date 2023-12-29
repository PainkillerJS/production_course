import { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';

import { AppRoute, routePath } from '@/shared/config/routeConfig/routeConfig';

import { type ArticleModel, ArticleListView } from '../../model/types';

import { ArticleListItemSkeleton } from './ui/ArticleListItemSkeleton';
import { BigArticleListItem } from './ui/BigArticleListItem';
import { SmallArticleListItem } from './ui/SmallArticleListItem';

interface ArticleListItemProps {
  article: ArticleModel;
  view: ArticleListView;
  isLoading: boolean;
  className?: string;
}

export const ArticleListItem = ({ article, view, className, isLoading }: ArticleListItemProps) => {
  const navigate = useNavigate();

  const onOpenArtice = useCallback(() => {
    navigate(`${routePath[AppRoute.ARTICLES]}/${article.id}`);
  }, [article.id, navigate]);

  if (isLoading) {
    return (
      <div>
        {new Array(view === ArticleListView.SMALL ? 9 : 3).fill(0).map((_, index) => (
          <ArticleListItemSkeleton key={index} view={view} />
        ))}
      </div>
    );
  }

  const Component = view === ArticleListView.BIG ? BigArticleListItem : SmallArticleListItem;

  return <Component className={className} article={article} onOpenArtice={onOpenArtice} />;
};
