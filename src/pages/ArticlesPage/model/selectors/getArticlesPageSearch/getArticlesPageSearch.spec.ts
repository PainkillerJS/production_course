import { type DeepPartial } from '@reduxjs/toolkit';

import { ArticleEnumType, ArticleListView, ArticleSortField } from '@/entities/Article';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getArticlesPageSearch } from '.';

describe('test selector = getArticlesPageSearch', () => {
  test('selector should return sort value', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: false,
        ids: [],
        entities: {},
        view: ArticleListView.BIG,
        isHasMore: true,
        page: 1,
        _initied: false,
        sort: ArticleSortField.CREATED,
        search: 'test search',
        order: 'asc',
        type: ArticleEnumType.ALL
      }
    };

    expect(getArticlesPageSearch(state as StateSchema)).toBe('test search');
  });
});
