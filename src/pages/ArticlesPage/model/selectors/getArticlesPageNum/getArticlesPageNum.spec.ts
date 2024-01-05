import { type DeepPartial } from '@reduxjs/toolkit';

import { ArticleListView } from '@/entities/Article';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getArticlesPageNum } from '.';

describe('test selector = getArticlesPageNum', () => {
  test('selector should return page`s number', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: false,
        ids: [],
        entities: {},
        view: ArticleListView.BIG,
        page: 1,
        isHasMore: true
      }
    };

    expect(getArticlesPageNum(state as StateSchema)).toBe(1);
  });
});
