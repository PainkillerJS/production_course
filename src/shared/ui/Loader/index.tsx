import type { FC } from 'react';

import './loader.scss';

const Loader: FC = () => {
  return (
    <div data-testid='loader' className='lds-ellipsis'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
