import { useCallback, useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import { getArticlesPageType } from '@/pages/ArticlesPage';
import { articlesPageAction } from '@/pages/ArticlesPage/model/slices';

import { ArticleEnumType } from '@/entities/Article';

import { clsx } from '@/shared/lib/classNames';
import { useAppDispatch, useAppSelector } from '@/shared/providers/StoreProvider';
import { type TabItem, Tabs } from '@/shared/ui/Tabs';

import styles from './articlesTabs.module.scss';

interface ArticlesTabsProps {
  className?: string;
  onClick?: (tab?: TabItem) => void;
}

export const ArticlesTabs = ({ className, onClick }: ArticlesTabsProps) => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const type = useAppSelector(getArticlesPageType);

  const onChangeType = useCallback(
    (tab: TabItem) => {
      dispatch(articlesPageAction.setType(tab.value as ArticleEnumType));
      dispatch(articlesPageAction.setPage(1));
      onClick?.();
    },
    [dispatch, onClick]
  );

  const typeTabs = useMemo<TabItem[]>(
    () => [
      {
        content: t('all'),
        value: ArticleEnumType.ALL
      },
      {
        content: 'IT',
        value: ArticleEnumType.IT
      },
      {
        content: t('economic'),
        value: ArticleEnumType.ECONOMIC
      },
      {
        content: t('science'),
        value: ArticleEnumType.SCIENCE
      }
    ],
    [t]
  );

  return (
    <Tabs
      tabs={typeTabs}
      value={type}
      onClickTab={onChangeType}
      className={clsx(className, styles.tabs)}
    />
  );
};
