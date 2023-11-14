import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetails } from '@/entities/Article';

const ArticleDetailsPage = () => {
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <section>{t('not_found')}</section>;
  }

  return (
    <section>
      <ArticleDetails id={id} />
    </section>
  );
};

export default ArticleDetailsPage;
