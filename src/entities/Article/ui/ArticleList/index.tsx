import { useTranslation } from 'react-i18next';
import { Virtuoso } from 'react-virtuoso';

import { ARTICLES_LIST_ID } from '@/shared/config/ids';
import { clsx } from '@/shared/lib/classNames';
import { Heading, HeadingSize } from '@/shared/ui/Heading';

import { type ArticleModel, ArticleListView } from '../../model/types';
import { ArticleListItem } from '../ArticleListItem';

import { ArticleListSkeleton } from './ArticleListSkeleton';

import styles from './articleList.module.scss';

interface ArticleListProps {
  articles: ArticleModel[];
  isLoading: boolean;
  onLoadNextPart?: () => void;
  className?: string;
  view?: ArticleListView;
}

export const ArticleList = ({
  className,
  articles,
  isLoading,
  onLoadNextPart,
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
      <Virtuoso<ArticleModel, Pick<ArticleListProps, 'view' | 'isLoading'>>
        data={articles}
        className={styles.virtuosoWrapper}
        endReached={onLoadNextPart}
        customScrollParent={document.getElementById(ARTICLES_LIST_ID)!}
        context={{ view, isLoading }}
        components={{
          Footer: ArticleListSkeleton
        }}
        itemContent={(_, article) => (
          <ArticleListItem key={article.id} article={article} view={view} className={styles.card} />
        )}
      />
    </div>
  );
};
