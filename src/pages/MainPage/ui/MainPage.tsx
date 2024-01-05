import { useTranslation } from 'react-i18next';

import { PageWrapper } from '@/shared/ui/PageWrapper';

const MainPage = () => {
  const { t } = useTranslation('main');

  return <PageWrapper>{t('main page')}</PageWrapper>;
};

export default MainPage;
