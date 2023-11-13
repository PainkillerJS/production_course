import { type FC } from 'react';

import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
  const { t } = useTranslation('main');

  return <section>{t('main page')}</section>;
};

export default MainPage;
