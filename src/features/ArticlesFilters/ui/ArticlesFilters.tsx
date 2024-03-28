import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import { getArticlesPageView } from '@/pages/ArticlesPage';
import { getArticlesPageOrder } from '@/pages/ArticlesPage/model/selectors/getArticlesPageOrder';
import { getArticlesPageSearch } from '@/pages/ArticlesPage/model/selectors/getArticlesPageSearch';
import { getArticlesPageSort } from '@/pages/ArticlesPage/model/selectors/getArticlesPageSort';
import { getArticlesListThunk } from '@/pages/ArticlesPage/model/services/getArticlesList';
import { articlesPageAction } from '@/pages/ArticlesPage/model/slices';

import { ArticlesSort } from '@/features/ArticlesSort';
import { ArticlesTabs } from '@/features/ArticlesTabs';
import { ArticlesViewSwitcher } from '@/features/ArticlesViewSwitcher';

import { type ArticleListView, type ArticleSortField } from '@/entities/Article';

import { clsx } from '@/shared/lib/classNames';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { setViewFromLocalStorage } from '@/shared/lib/storage/view';
import { useAppDispatch, useAppSelector } from '@/shared/providers/StoreProvider';
import { type SortOrder } from '@/shared/types';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';

import styles from './articlesFilters.module.scss';

interface ArticlesFiltersProps {
  className?: string;
}

export const ArticlesFilters = memo(({ className }: ArticlesFiltersProps) => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();

  const view = useAppSelector(getArticlesPageView);
  const sort = useAppSelector(getArticlesPageSort);
  const order = useAppSelector(getArticlesPageOrder);
  const search = useAppSelector(getArticlesPageSearch);

  const getArticlesList = useCallback(() => {
    dispatch(getArticlesListThunk({ isReplace: true }));
  }, [dispatch]);

  const debounceGetArticlesList = useDebounce(getArticlesList, 500);

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageAction.setSort(newSort));
      dispatch(articlesPageAction.setPage(1));
      getArticlesList();
    },
    [dispatch, getArticlesList]
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageAction.setOrder(newOrder));
      dispatch(articlesPageAction.setPage(1));
      getArticlesList();
    },
    [dispatch, getArticlesList]
  );

  const onChangeSelect = useCallback(
    (value: string) => {
      dispatch(articlesPageAction.setSearch(value));
      dispatch(articlesPageAction.setPage(1));
      debounceGetArticlesList();
    },
    [dispatch, debounceGetArticlesList]
  );

  const onChangeView = useCallback(
    (view: ArticleListView) => {
      setViewFromLocalStorage(view);
      dispatch(articlesPageAction.setView(view));
    },
    [dispatch]
  );

  return (
    <div className={clsx(className)}>
      <div className={styles.filterPanel}>
        <ArticlesSort
          order={order}
          onChangeOrder={onChangeOrder}
          sort={sort}
          onChangeSort={onChangeSort}
          className={styles.sortWrapper}
        />

        <ArticlesViewSwitcher onViewClick={onChangeView} view={view} />
      </div>

      <Card className={styles.search}>
        <search>
          <Input onChange={onChangeSelect} value={search} placeholder={t('search')} />
        </search>
      </Card>

      <ArticlesTabs onClick={debounceGetArticlesList} />
    </div>
  );
});
