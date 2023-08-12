import { useEffect, type FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
  const { t } = useTranslation('main');

  useEffect(() => {
    if (Math.random() < 0.5) {
      throw new Error();
    }
  });

  return <div>{t('main page')}</div>;
};

export default MainPage;
