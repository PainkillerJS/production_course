import { memo } from 'react';

import { routePath } from '@/shared/config/routeConfig/routeConfig';
import { clsx } from '@/shared/lib/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Flex } from '@/shared/ui/Stack/Flex';
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
    <Flex direction='column' gap='8' className={clsx(className, styles.commentCard)} isMax>
      <AppLink to={`${routePath.profile}/${comment.user.id}`} className={styles.header}>
        {user.avatar && (
          <Avatar srcImg={user.avatar} size={30} alt={`${user.username ?? ''} avatar`} />
        )}

        <Text className={styles.username}>{user.username}</Text>
      </AppLink>

      <Text className={styles.text}>{text}</Text>
    </Flex>
  );
});
