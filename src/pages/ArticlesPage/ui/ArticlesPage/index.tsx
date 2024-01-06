import { useCallback, useEffect } from 'react';

import { ArticlesViewSwitcher } from '@/features/ArticlesViewSwitcher';

import { type ArticleListView } from '@/entities/Article';
import { ArticleList } from '@/entities/Article/ui/ArticleList';

import { type ReducersList, DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';
import { setViewFromLocalStorage } from '@/shared/lib/storage/view';
import { useAppDispatch, useAppSelector } from '@/shared/providers/StoreProvider';
import { PageWrapper } from '@/shared/ui/PageWrapper';

import { getArticlesPageIsLoading } from '../../model/selectors/getArticlesPageIsLoading';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView';
import { getNextArticlesListThunk } from '../../model/services/getNextArticlesList';
import { updateInitedArticlesPageThunk } from '../../model/services/updateInitedArticlesPage';
import { articlesPageAction, articlesPageReducer, getArticlesAdapter } from '../../model/slices';

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
};

const ArticlesPage = () => {
  const dispatch = useAppDispatch();

  const articles = useAppSelector(getArticlesAdapter.selectAll);
  const isLoading = useAppSelector(getArticlesPageIsLoading);
  const view = useAppSelector(getArticlesPageView);

  const onChangeView = useCallback(
    (view: ArticleListView) => {
      setViewFromLocalStorage(view);
      dispatch(articlesPageAction.setView(view));
    },
    [dispatch]
  );

  const onLoadNextPart = useCallback(() => {
    dispatch(getNextArticlesListThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(updateInitedArticlesPageThunk());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount={false}>
      <PageWrapper onScrollEnd={onLoadNextPart}>
        <ArticlesViewSwitcher view={view} onViewClick={onChangeView} />

        <ArticleList articles={articles} view={view} isLoading={isLoading} />
      </PageWrapper>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
