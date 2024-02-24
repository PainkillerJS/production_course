import { useTranslation } from 'react-i18next';

import { clsx } from '@/shared/lib/classNames';
import { Heading, HeadingSize } from '@/shared/ui/Heading';

import { type ArticleModel, ArticleListView } from '../../model/types';
import { ArticleListItem } from '../ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ui/ArticleListItemSkeleton';

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
  const { t } = useTranslation('articles');

  if (!isLoading && !articles.length) {
    return (
      <div className={clsx(className, styles[view])}>
        <Heading size={HeadingSize.L}>{t('articles_not_found')}</Heading>
      </div>
    );
  }

  return (
    <div className={clsx(className, styles[view])}>
      {articles?.map((article) => {
        return (
          <ArticleListItem key={article.id} article={article} view={view} className={styles.card} />
        );
      })}

      {isLoading &&
        new Array(view === ArticleListView.SMALL ? 9 : 3)
          .fill(0)
          .map((_, index) => (
            <ArticleListItemSkeleton key={index} view={view} className={styles.card} />
          ))}
    </div>
  );
};
