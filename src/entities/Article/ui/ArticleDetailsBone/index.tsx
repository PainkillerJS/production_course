import { Skeleton } from '@/shared/ui/Skeleton';

import styles from './articleDetailsBone.module.scss';

export const ArticleDetailsBone = () => {
  return (
    <>
      <Skeleton className={styles.avatar} width={200} height={200} borderRadius='50%' />
      <Skeleton className={styles.title} width={300} height={24} />
      <Skeleton className={styles.skeleton} width={600} height={24} />
      <Skeleton className={styles.skeleton} width='100%' height={200} />
      <Skeleton className={styles.skeleton} width='100%' height={200} />
    </>
  );
};
