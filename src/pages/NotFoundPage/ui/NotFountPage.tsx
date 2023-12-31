import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './notFoundPage.module.scss';

const NotFountPage: FC = () => {
  const { t } = useTranslation('notFound');

  return <section className={styles.notFoundPage}>{t('page is not found')}</section>;
};

export default NotFountPage;
