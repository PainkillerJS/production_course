import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails, articleDetailsReducer } from '@/entities/Article';

import { type ReducersList, DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';

import styles from './articleDetailsPage.module.scss';

const initialReducers: ReducersList = { articles: articleDetailsReducer };

const ArticleDetailsPage = () => {
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <section>{t('not_found')}</section>;
  }

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <section className={styles.articleDetailsPage}>
        <ArticleDetails id={id} />
      </section>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
