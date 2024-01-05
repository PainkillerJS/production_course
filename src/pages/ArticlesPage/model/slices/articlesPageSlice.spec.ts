import { ArticleListView } from '@/entities/Article';

import { type ArticlesPageSchema } from '../types';

import { articlesPageAction, articlesPageReducer } from '.';

describe('test slice = articlesPageSlice', () => {
  test('test change profile data - setView', () => {
    const state: ArticlesPageSchema = {
      ids: [],
      view: ArticleListView.SMALL,
      entities: {},
      error: undefined,
      isLoading: false
    };

    expect(articlesPageReducer(state, articlesPageAction.setView(ArticleListView.BIG))).toEqual({
      ...state,
      view: ArticleListView.BIG
    });

    expect(articlesPageReducer(state, articlesPageAction.setView(ArticleListView.SMALL))).toEqual({
      ...state,
      view: ArticleListView.SMALL
    });
  });
});
