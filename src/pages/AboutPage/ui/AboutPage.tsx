import { useTranslation } from 'react-i18next';

import { PageWrapper } from '@/widgets/PageWrapper';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return <PageWrapper>{t('about page')}</PageWrapper>;
};

export default AboutPage;
