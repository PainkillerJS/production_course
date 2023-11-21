import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { clsx } from '@/shared/lib/classNames';
import { Text } from '@/shared/ui/Typography';

import { type CommentModel } from '../../model/types';
import { CommentCard } from '../CommentCard';

interface CommentListProps {
  comments: CommentModel[];
  className?: string;
  isLoading?: boolean;
}

export const CommentsList = memo(({ comments, className, isLoading }: CommentListProps) => {
  const { t } = useTranslation('comments');

  return (
    <div className={clsx(className)}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard isLoading={isLoading} key={comment.id} comment={comment} />
        ))
      ) : (
        <Text>{t('no_comments')}</Text>
      )}
    </div>
  );
});
