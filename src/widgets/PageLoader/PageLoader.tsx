import type { FC } from 'react';

import Loader from '@/shared/ui/Loader';

import styles from './pageLoader.module.scss';

const PageLoader: FC = () => {
  return (
    <div className={styles.pageLoader}>
      <Loader />
    </div>
  );
};

export default PageLoader;
