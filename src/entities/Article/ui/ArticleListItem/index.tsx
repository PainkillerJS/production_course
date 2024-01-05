import { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';

import { AppRoute, routePath } from '@/shared/config/routeConfig/routeConfig';

import { type ArticleModel, ArticleListView } from '../../model/types';

import { BigArticleListItem } from './ui/BigArticleListItem';
import { SmallArticleListItem } from './ui/SmallArticleListItem';

interface ArticleListItemProps {
  article: ArticleModel;
  view: ArticleListView;
  className?: string;
}

export const ArticleListItem = ({ article, view, className }: ArticleListItemProps) => {
  const navigate = useNavigate();

  const onOpenArtice = useCallback(() => {
    navigate(`${routePath[AppRoute.ARTICLES]}/${article.id}`);
  }, [article.id, navigate]);

  const Component = view === ArticleListView.BIG ? BigArticleListItem : SmallArticleListItem;

  return <Component className={className} article={article} onOpenArtice={onOpenArtice} />;
};
