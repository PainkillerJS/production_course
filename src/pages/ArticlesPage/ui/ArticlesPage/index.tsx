import { useCallback, useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { PageWrapper } from '@/widgets/PageWrapper';

import { ArticlesFilters } from '@/features/ArticlesFilters';

import { ArticleList } from '@/entities/Article/ui/ArticleList';

import { type ReducersList, DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';
import { useAppDispatch, useAppSelector } from '@/shared/providers/StoreProvider';

import { getArticlesPageIsLoading } from '../../model/selectors/getArticlesPageIsLoading';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView';
import { getNextArticlesListThunk } from '../../model/services/getNextArticlesList';
import { updateInitedArticlesPageThunk } from '../../model/services/updateInitedArticlesPage';
import { articlesPageReducer, getArticlesAdapter } from '../../model/slices';

import styles from './articlesPage.module.scss';

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
};

const ArticlesPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  const articles = useAppSelector(getArticlesAdapter.selectAll);
  const isLoading = useAppSelector(getArticlesPageIsLoading);
  const view = useAppSelector(getArticlesPageView);

  const onLoadNextPart = useCallback(() => {
    dispatch(getNextArticlesListThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(updateInitedArticlesPageThunk(searchParams));
  }, [dispatch, searchParams]);

  return (
    <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount={false}>
      <PageWrapper onScrollEnd={onLoadNextPart}>
        <ArticlesFilters />

        <ArticleList
          articles={articles}
          view={view}
          isLoading={isLoading}
          className={styles.list}
        />
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
