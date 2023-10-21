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

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps extends PropsWithChildren {
  reducers: ReducersList;
  isRemoveAfterUnmount?: boolean;
}

export const DynamicModuleLoader = ({
  children,
  reducers,
  isRemoveAfterUnmount
}: DynamicModuleLoaderProps) => {
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
      store.reducerManager.add(key, reducer);
    });

    return () => {
      if (isRemoveAfterUnmount) {
        Object.entries(reducers).forEach(([key]: ReducersListEntry) => {
          store.reducerManager.remove(key);
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
