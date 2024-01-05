import { useCallback, useEffect } from 'react';

import { ArticlesViewSwitcher } from '@/features/ArticlesViewSwitcher';

import { type ArticleListView } from '@/entities/Article';
import { ArticleList } from '@/entities/Article/ui/ArticleList';

import { type ReducersList, DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';
import { useAppDispatch, useAppSelector } from '@/shared/providers/StoreProvider';

import { getArticlesPageIsLoading } from '../../model/selectors/getArticlesPageIsLoading';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView';
import { getArticlesListThunk } from '../../model/services/getArticlesList';
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
      dispatch(articlesPageAction.setView(view));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getArticlesListThunk());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <section>
        <ArticlesViewSwitcher view={view} onViewClick={onChangeView} />

        <ArticleList articles={articles} view={view} isLoading={isLoading} />
      </section>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
