import { type DeepPartial } from '@reduxjs/toolkit';

import { ArticleListView } from '@/entities/Article';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getArticlesPageIsLoading } from '.';

describe('test selector = getArticlesPageIsLoading', () => {
  test('selector should return loading status', () => {
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

    expect(getArticlesPageIsLoading(state as StateSchema)).toBe(false);
  });
});
