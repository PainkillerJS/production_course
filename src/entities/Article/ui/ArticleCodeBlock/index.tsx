import { memo } from 'react';

import { clsx } from '@/shared/lib/classNames';
import { Code } from '@/shared/ui/Code';

import { type ArticleCodeBlockType } from '../../model/types';

import styles from './articleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
  className?: string;
  block: ArticleCodeBlockType;
}

export const ArticleCodeBlock = memo(({ className, block }: ArticleCodeBlockProps) => {
  return (
    <div className={clsx(className, styles.articleCodeBlock)}>
      <Code text={block.code} />
    </div>
  );
});
