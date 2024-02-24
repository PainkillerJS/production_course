import { type DeepPartial } from '@reduxjs/toolkit';

import { ArticleEnumType, ArticleListView, ArticleSortField } from '@/entities/Article';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getArticlesPageType } from '.';

describe('test selector = getArticlesPageSort', () => {
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
        search: '',
        order: 'asc',
        type: ArticleEnumType.ALL
      }
    };

    expect(getArticlesPageType(state as StateSchema)).toBe(ArticleEnumType.ALL);
  });
});
