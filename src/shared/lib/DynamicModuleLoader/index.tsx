import { type PropsWithChildren, useEffect } from 'react';

import { useStore } from 'react-redux';
import { type Reducer } from '@reduxjs/toolkit';

import {
  type ReduxStoreWithManager,
  type StateSchemaKey
} from '@/shared/providers/StoreProvider/config/stateSchema';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps extends PropsWithChildren {
  reducers: ReducersList;
  /**
   * @default true
   * @description Удалять редюсеры после размонитрования компонента
   */
  isRemoveAfterUnmount?: boolean;
}

export const DynamicModuleLoader = ({
  children,
  reducers,
  isRemoveAfterUnmount = true
}: DynamicModuleLoaderProps) => {
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([key, reducer]) => {
      const mounted = mountedReducers[key as StateSchemaKey];

      if (!mounted) {
        store.reducerManager.add(key as StateSchemaKey, reducer);
      }
    });

    return () => {
      if (isRemoveAfterUnmount) {
        Object.entries(reducers).forEach(([key]) => {
          store.reducerManager.remove(key as StateSchemaKey);
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
