import { useCallback, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import { PageWrapper } from '@/widgets/PageWrapper';

import { AddCommentForm } from '@/features/AddCommentForm';

import { ArticleDetails } from '@/entities/Article';
import { CommentsList } from '@/entities/Comment';
import { getUserAuthUsername } from '@/entities/User';

import { AppRoute, routePath } from '@/shared/config/routeConfig/routeConfig';
import { type ReducersList, DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';
import { useAppDispatch, useAppSelector } from '@/shared/providers/StoreProvider';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';
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
  const navigate = useNavigate();

  const username = useAppSelector(getUserAuthUsername);
  const comments = useAppSelector(getArticleComments.selectAll);
  const isCommentsIsLoading = useAppSelector(getArticleDetailsCommentsIsLoading);

  const onSendComment = useCallback(
    (value: string) => {
      dispatch(sendCommentForArticle(value));
    },
    [dispatch]
  );

  const onBackToList = useCallback(() => {
    navigate(routePath[AppRoute.ARTICLES]);
  }, [navigate]);

  useEffect(() => {
    dispatch(getCommentsByArticleIdThunk(id));
  }, [dispatch, id]);

  if (!id) {
    return <PageWrapper>{t('not_found')}</PageWrapper>;
  }

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <section className={styles.articleDetailsPage}>
        <Button onClick={onBackToList} variant={ThemeButton.OUTLINE}>
          {t('back_to_lists')}
        </Button>

        <ArticleDetails id={id} />

        <Heading className={styles.commentTitle}>{t('comments')}</Heading>

        {username && <AddCommentForm onSendComment={onSendComment} />}

        <CommentsList comments={comments} isLoading={isCommentsIsLoading} />
      </section>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
