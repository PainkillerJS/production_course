import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@/shared/ui/Button/Button';

import styles from './pageError.module.scss';

const PageError: FC = () => {
  const { t } = useTranslation('pageError');

  const onReloadPage = (): void => {
    location.reload();
  };

  return (
    <div data-testid='pageError' className={styles.pageError}>
      <p>{t('pageError')}</p>
      <Button onClick={onReloadPage}> {t('buttonReload')} </Button>
    </div>
  );
};

export default PageError;
