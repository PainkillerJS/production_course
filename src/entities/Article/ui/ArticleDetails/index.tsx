import { memo, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { clsx } from '@/shared/lib/classNames';
import { type ReducersList, DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';
import { useAppDispatch, useAppSelector } from '@/shared/providers/StoreProvider';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text, TextTheme } from '@/shared/ui/Typography';

import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData';
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError';
import { getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetailsIsLoading';
import { getArticleByIdThunk } from '../../model/services/getArticleById';
import { articleDetailsReducer } from '../../model/slice';

import styles from './articleDetails.module.scss';

const initialReducers: ReducersList = { articles: articleDetailsReducer };

interface ArticleDetailsProps {
  id: string;
  className?: string;
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('articles');

  const isLoading = useAppSelector(getArticleDetailsIsLoading);
  const data = useAppSelector(getArticleDetailsData);
  const error = useAppSelector(getArticleDetailsError);

  useEffect(() => {
    dispatch(getArticleByIdThunk(id));
  }, [dispatch, id]);

  let content: JSX.Element;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={styles.avatar} width={200} height={200} borderRadius='50%' />
        <Skeleton className={styles.title} width={300} height={24} />
        <Skeleton className={styles.skeleton} width={600} height={24} />
        <Skeleton className={styles.skeleton} width='100%' height={200} />
        <Skeleton className={styles.skeleton} width='100%' height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text variant={TextTheme.ERROR} className={styles.error}>
        {t('error')}
      </Text>
    );
  } else {
    content = <div>{data?.title}</div>;
  }

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={clsx(className, styles.articleDetails)}>{content}</div>
    </DynamicModuleLoader>
  );
});
