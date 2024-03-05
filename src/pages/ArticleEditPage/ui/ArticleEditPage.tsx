import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { PageWrapper } from '@/widgets/PageWrapper';

const ArticleEditPage = () => {
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string }>();

  const isEdit = Boolean(id);

  return <PageWrapper>{isEdit ? t('edit_article') : t('create_article')}</PageWrapper>;
};

export default ArticleEditPage;
