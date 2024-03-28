import { ArticleListView } from '@/entities/Article/model/types';

import { clsx } from '@/shared/lib/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';

import styles from '../../articleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  view?: ArticleListView;
  className?: string;
}

export const ArticleListItemSkeleton = ({ className, view }: ArticleListItemSkeletonProps) => {
  if (view === ArticleListView.BIG) {
    return (
      <div className={clsx(className, styles.big)}>
        <Card>
          <div className={styles.header}>
            <Skeleton borderRadius={'50%'} height={30} width={30} />

            <Skeleton width={150} height={16} className={styles.username} />
            <Skeleton width={150} height={16} className={styles.date} />

            <Skeleton width={250} height={24} className={styles.title} />
          </div>

          <Skeleton height={200} className={styles.img} />

          <div className={styles.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={clsx(styles.articleListItemSkeleton, styles.small, className)}>
      <Card className={styles.card}>
        <div className={styles.imageWrapper}>
          <Skeleton width={200} height={200} className={styles.img} />
        </div>

        <div className={clsx(styles.infoWrapper)}>
          <Skeleton width={130} height={16} />
        </div>

        <Skeleton width={150} height={16} className={clsx(styles.title)} />
      </Card>
    </div>
  );
};
