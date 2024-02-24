import { memo, useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleSortField } from '@/entities/Article';

import { clsx } from '@/shared/lib/classNames';
import { type SortOrder } from '@/shared/types';
import { type OptionsType, Select } from '@/shared/ui/Select';

import styles from './articlesSort.module.scss';

interface ArticlesSortProps {
  sort?: ArticleSortField;
  order?: SortOrder;
  onChangeOrder?: (newOrder: SortOrder) => void;
  onChangeSort?: (newOrder: ArticleSortField) => void;
  className?: string;
}

export const ArticlesSort = memo(
  ({ className, onChangeOrder, onChangeSort, order, sort }: ArticlesSortProps) => {
    const { t } = useTranslation('articles');

    const orderOptions = useMemo<OptionsType[]>(
      () => [
        { value: 'asc', content: t('up') },
        { value: 'desc', content: t('down') }
      ],
      [t]
    );

    const sortFieldOptions = useMemo<OptionsType[]>(
      () => [
        { value: ArticleSortField.CREATED, content: t('date_created_sort') },
        { value: ArticleSortField.TITLE, content: t('title_sort') },
        { value: ArticleSortField.VIEWS, content: t('views_sort') }
      ],
      [t]
    );

    return (
      <div className={clsx(className)}>
        <Select
          value={sort}
          options={sortFieldOptions}
          onChange={onChangeSort}
          label={t('sort_by')}
        />
        <Select
          options={orderOptions}
          value={order}
          onChange={onChangeOrder}
          label={t('order_by')}
          className={styles.order}
        />
      </div>
    );
  }
);
