import { type DeepPartial } from '@reduxjs/toolkit';

import { ArticleEnumType, ArticleListView, ArticleSortField } from '@/entities/Article';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getArticlesPageView } from '.';

describe('test selector = getArticlesPageView', () => {
  test('selector should return view status', () => {
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

    expect(getArticlesPageView(state as StateSchema)).toBe(ArticleListView.BIG);
  });
});
