import { memo } from 'react';

import { clsx } from '@/shared/lib/classNames';
import { Heading } from '@/shared/ui/Heading';
import { Text } from '@/shared/ui/Typography';

import { type ArticleTextBlockType } from '../../model/types';

import styles from './articleTextBlock.module.scss';

interface ArticleTextBlockProps {
  block: ArticleTextBlockType;
  className?: string;
}

export const ArticleTextBlock = memo(({ className, block }: ArticleTextBlockProps) => {
  return (
    <div className={clsx(className)}>
      {Boolean(block.title) && <Heading className={styles.title}>{block.title}</Heading>}

      {block?.paragraphs.map((paragraph) => (
        <Text key={paragraph} className={styles.paragraph}>
          {paragraph}
        </Text>
      ))}
    </div>
  );
});
