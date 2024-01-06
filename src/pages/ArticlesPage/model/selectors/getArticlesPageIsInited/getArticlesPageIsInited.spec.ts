import { type DeepPartial } from '@reduxjs/toolkit';

import { ArticleListView } from '@/entities/Article';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getArticlesPageIsInited } from '.';

describe('test selector = getArticlesPageIsInited', () => {
  test('selector should return inited flag', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: false,
        ids: [],
        entities: {},
        view: ArticleListView.BIG,
        isHasMore: true,
        page: 1,
        _initied: false
      }
    };

    expect(getArticlesPageIsInited(state as StateSchema)).toBe(false);
  });
});
