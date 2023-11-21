import { clsx } from '@/shared/lib/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';

import styles from './commentCard.module.scss';

interface CommentCardBoneProps {
  className?: string;
}

export const CommentCardBone = ({ className }: CommentCardBoneProps) => {
  return (
    <div className={clsx(className)}>
      <div className={styles.header}>
        <Skeleton className={styles.avatarSkeleton} width={30} height={30} borderRadius='50%' />

        <Skeleton height={16} width={100} className={styles.username} />
      </div>

      <Skeleton width='100%' height={50} className={styles.text} />
    </div>
  );
};
