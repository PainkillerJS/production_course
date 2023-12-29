import { clsx } from '@/shared/lib/classNames';

import { type ArticleModel, ArticleListView } from '../../model/types';
import { ArticleListItem } from '../ArticleListItem';

import styles from './articleList.module.scss';

interface ArticleListProps {
  articles: ArticleModel[];
  isLoading: boolean;
  className?: string;
  view?: ArticleListView;
}

export const ArticleList = ({
  className,
  articles,
  isLoading,
  view = ArticleListView.SMALL
}: ArticleListProps) => {
  return (
    <div className={clsx(className, styles[view])}>
      {articles?.map((article) => {
        return (
          <ArticleListItem
            isLoading={isLoading}
            key={article.id}
            article={article}
            view={view}
            className={styles.card}
          />
        );
      })}
    </div>
  );
};
