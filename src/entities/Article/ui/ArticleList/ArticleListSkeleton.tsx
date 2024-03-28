import { ArticleListView } from '../../model/types';
import { ArticleListItemSkeleton } from '../ArticleListItem/ui/ArticleListItemSkeleton';

import styles from './articleList.module.scss';

interface ArticleListSkeletonProps {
  context?: {
    view?: ArticleListView;
    isLoading: boolean;
  };
}

export const ArticleListSkeleton = ({ context }: ArticleListSkeletonProps) => {
  const { view, isLoading } = context ?? {};

  return (
    <>
      {isLoading && (
        <div className={styles[view ?? 'BIG']}>
          {Array.from({ length: view === ArticleListView.SMALL ? 9 : 3 }).map((_, index) => (
            <ArticleListItemSkeleton key={index} view={view} className={styles.card} />
          ))}
        </div>
      )}
    </>
  );
};
