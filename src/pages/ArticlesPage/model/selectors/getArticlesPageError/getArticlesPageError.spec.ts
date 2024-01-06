import { type DeepPartial } from '@reduxjs/toolkit';

import { ArticleListView } from '@/entities/Article';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getArticlesPageError } from '.';

describe('test selector = getArticlesPageView', () => {
  test('selector should return view status', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: false,
        ids: [],
        entities: {},
        view: ArticleListView.BIG,
        error: 'test error',
        isHasMore: true,
        page: 1,
        _initied: false
      }
    };

    expect(getArticlesPageError(state as StateSchema)).toBe('test error');
  });
});
