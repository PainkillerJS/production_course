import { type DeepPartial } from '@reduxjs/toolkit';

import { ArticleListView } from '@/entities/Article';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getArticlesPageView } from '.';

describe('test selector = getArticlesPageView', () => {
  test('selector should return view status', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: false,
        ids: [],
        entities: {},
        view: ArticleListView.BIG
      }
    };

    expect(getArticlesPageView(state as StateSchema)).toBe(ArticleListView.BIG);
  });
});
