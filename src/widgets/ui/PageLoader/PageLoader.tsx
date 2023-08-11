import type { FC } from 'react';

import styles from './pageLoader.module.scss';
import Loader from '@/shared/ui/Loader';

const PageLoader: FC = () => {
  return (
    <div className={styles.pageLoader}>
      <Loader />
    </div>
  );
};

export default PageLoader;
