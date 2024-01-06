import { type DeepPartial } from '@reduxjs/toolkit';

import { ArticleListView } from '@/entities/Article';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getArticlesPageLimit } from '.';

describe('test selector = getArticlesPageLimit', () => {
  test('selector should return limit`s number', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: false,
        ids: [],
        entities: {},
        view: ArticleListView.BIG,
        page: 1,
        isHasMore: true,
        limit: 9,
        _initied: false
      }
    };

    expect(getArticlesPageLimit(state as StateSchema)).toBe(9);
  });
});
