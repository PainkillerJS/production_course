import { memo } from 'react';

import { clsx } from '@/shared/lib/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Typography';

import { type CommentModel } from '../../model/types';

import { CommentCardBone } from './CommentCardBone';

import styles from './commentCard.module.scss';

interface CommentCardProps {
  comment: CommentModel;
  className?: string;
  isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
  const { user, text } = comment;

  if (isLoading) {
    return <CommentCardBone className={className} />;
  }

  return (
    <div className={clsx(className, styles.commentCard)}>
      <div className={styles.header}>
        {user.avatar && (
          <Avatar srcImg={user.avatar} size={30} alt={`${user.username ?? ''} avatar`} />
        )}

        <Text className={styles.username}>{user.username}</Text>
      </div>

      <Text className={styles.text}>{text}</Text>
    </div>
  );
});
