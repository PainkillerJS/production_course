import { type HTMLAttributeAnchorTarget } from 'react';

import { type ArticleModel, ArticleListView } from '../../model/types';

import { BigArticleListItem } from './ui/BigArticleListItem';
import { SmallArticleListItem } from './ui/SmallArticleListItem';

interface ArticleListItemProps {
  article: ArticleModel;
  view: ArticleListView;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = ({ article, view, className, target }: ArticleListItemProps) => {
  const Component = view === ArticleListView.BIG ? BigArticleListItem : SmallArticleListItem;

  return <Component className={className} article={article} target={target ?? '_blank'} />;
};
