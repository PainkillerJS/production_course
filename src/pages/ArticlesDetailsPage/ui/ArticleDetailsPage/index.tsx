import { useCallback, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import { PageWrapper } from '@/widgets/PageWrapper';

import { AddCommentForm } from '@/features/AddCommentForm';

import { ArticleDetails } from '@/entities/Article';
import { ArticleList } from '@/entities/Article/ui/ArticleList';
import { CommentsList } from '@/entities/Comment';
import { getUserAuthUsername } from '@/entities/User';

import { AppRoute, routePath } from '@/shared/config/routeConfig/routeConfig';
import { type ReducersList, DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';
import { useAppDispatch, useAppSelector } from '@/shared/providers/StoreProvider';
import Button, { ThemeButton } from '@/shared/ui/Button/Button';
import { Heading, HeadingSize } from '@/shared/ui/Heading';

import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/getArticleDetailsCommentsIsLoading';
import { getArticleDetailsRecomendationsIsLoading } from '../../model/selectors/getArticleDetailsRecomendationsIsLoading';
import { getCommentsByArticleIdThunk } from '../../model/services/getCommentsByArticleId';
import { sendCommentForArticle } from '../../model/services/sendCommentForArticle';
import { articleDetailsPageReducer } from '../../model/slices';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleRecomendations } from '../../model/slices/articleDetailsRecomendationsSlice';

import { getArticlesRecommendationsThunk } from './../../model/services/getArticlesRecommendations/index';

import styles from './articleDetailsPage.module.scss';

const initialReducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage = () => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const username = useAppSelector(getUserAuthUsername);
  const comments = useAppSelector(getArticleComments.selectAll);
  const isCommentsIsLoading = useAppSelector(getArticleDetailsCommentsIsLoading);

  const recomendations = useAppSelector(getArticleRecomendations.selectAll);
  const isRecomendationsLoading = useAppSelector(getArticleDetailsRecomendationsIsLoading);

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
    dispatch(getArticlesRecommendationsThunk());
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

        <Heading size={HeadingSize.L} className={styles.commentTitle}>
          {t('recommends')}
        </Heading>

        <ArticleList
          articles={recomendations}
          isLoading={isRecomendationsLoading}
          className={styles.recommendations}
        />

        <Heading className={styles.commentTitle}>{t('comments')}</Heading>
        {username && <AddCommentForm onSendComment={onSendComment} />}
        <CommentsList comments={comments} isLoading={isCommentsIsLoading} />
      </section>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
