import { type DeepPartial } from '@reduxjs/toolkit';

import { ArticleEnumType, ArticleListView, ArticleSortField } from '@/entities/Article';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getArticlesPageIsHasMore } from '.';

describe('test selector = getArticlesPageIsHasMore', () => {
  test('selector should return has more articles', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: false,
        ids: [],
        entities: {},
        view: ArticleListView.BIG,
        page: 1,
        isHasMore: true,
        _initied: false,
        sort: ArticleSortField.CREATED,
        search: '',
        order: 'asc',
        type: ArticleEnumType.ALL
      }
    };

    expect(getArticlesPageIsHasMore(state as StateSchema)).toBe(true);
  });
});
