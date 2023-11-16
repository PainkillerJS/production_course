import { memo } from 'react';

import { clsx } from '@/shared/lib/classNames';
import { Heading } from '@/shared/ui/Heading';

import { type ArticleImageBlockType } from '../../model/types';

import styles from './articleImageBlock.module.scss';

interface ArticleImageBlockProps {
  className?: string;
  block: ArticleImageBlockType;
}

export const ArticleImageBlock = memo(({ className, block }: ArticleImageBlockProps) => {
  const { src, title } = block;

  return (
    <div className={clsx(className)}>
      <img src={src} alt={`${title ?? ''} img`} className={styles.img} />

      {title && <Heading className={styles.title}>{title}</Heading>}
    </div>
  );
});
