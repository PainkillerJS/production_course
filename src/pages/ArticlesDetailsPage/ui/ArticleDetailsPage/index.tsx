import { useCallback, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { AddCommentForm } from '@/features/AddCommentForm';

import { ArticleDetails } from '@/entities/Article';
import { CommentsList } from '@/entities/Comment';
import { getUserAuthUsername } from '@/entities/User';

import { type ReducersList, DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';
import { useAppDispatch, useAppSelector } from '@/shared/providers/StoreProvider';
import { Heading } from '@/shared/ui/Heading';

import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/getArticleDetailsCommentsIsLoading';
import { getCommentsByArticleIdThunk } from '../../model/services/getCommentsByArticleId';
import { sendCommentForArticle } from '../../model/services/sendCommentForArticle';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices';

import styles from './articleDetailsPage.module.scss';

const initialReducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
};

const ArticleDetailsPage = () => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const username = useAppSelector(getUserAuthUsername);
  const comments = useAppSelector(getArticleComments.selectAll);
  const isCommentsIsLoading = useAppSelector(getArticleDetailsCommentsIsLoading);

  const onSendComment = useCallback(
    (value: string) => {
      dispatch(sendCommentForArticle(value));
    },
    [dispatch]
  );

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

        {username && <AddCommentForm onSendComment={onSendComment} />}

        <CommentsList comments={comments} isLoading={isCommentsIsLoading} />
      </section>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
