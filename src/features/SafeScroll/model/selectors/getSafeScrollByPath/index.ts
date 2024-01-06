import { createSelector } from '@reduxjs/toolkit';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getSafeScroll } from '../getSafeScroll';

export const getSafeScrollByPath = createSelector(
  getSafeScroll,
  (_: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] ?? 0
);
