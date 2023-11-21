import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';
import { CommentsList } from '@/entities/Comment';

import { type ReducersList, DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';
import { useAppDispatch, useAppSelector } from '@/shared/providers/StoreProvider';
import { Heading } from '@/shared/ui/Heading';

import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/getArticleDetailsCommentsIsLoading';
import { getCommentsByArticleIdThunk } from '../../model/services/getCommentsByArticleId';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices';

import styles from './articleDetailsPage.module.scss';

const initialReducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
};

const ArticleDetailsPage = () => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const comments = useAppSelector(getArticleComments.selectAll);
  const isCommentsIsLoading = useAppSelector(getArticleDetailsCommentsIsLoading);

  useEffect(() => {
    dispatch(getCommentsByArticleIdThunk(id));
  }, [dispatch, id]);

  if (!id) {
    return <section>{t('not_found')}</section>;
  }

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <section className={styles.articleDetailsPage}>
        <ArticleDetails id={id} />

        <Heading className={styles.commentTitle}>{t('comments')}</Heading>

        <CommentsList comments={comments} isLoading={isCommentsIsLoading} />
      </section>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
