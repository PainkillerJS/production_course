import { ArticleEnumType, ArticleListView, ArticleSortField } from '@/entities/Article';

import { type ArticlesPageSchema } from '../types';

import { articlesPageAction, articlesPageReducer } from '.';

describe('test slice = articlesPageSlice', () => {
  const state: ArticlesPageSchema = {
    ids: [],
    view: ArticleListView.SMALL,
    entities: {},
    error: undefined,
    isLoading: false,
    page: 1,
    isHasMore: true,
    _initied: false,
    sort: ArticleSortField.CREATED,
    search: '',
    order: 'asc',
    type: ArticleEnumType.ALL
  };

  test('test change profile data - setView', () => {
    expect(articlesPageReducer(state, articlesPageAction.setView(ArticleListView.BIG))).toEqual({
      ...state,
      view: ArticleListView.BIG
    });

    expect(articlesPageReducer(state, articlesPageAction.setView(ArticleListView.SMALL))).toEqual({
      ...state,
      view: ArticleListView.SMALL
    });
  });

  test('test change profile data - setPage', () => {
    expect(articlesPageReducer(state, articlesPageAction.setPage(2))).toEqual({
      ...state,
      page: 2
    });
  });

  test('test change profile data - setSort', () => {
    expect(articlesPageReducer(state, articlesPageAction.setSort(ArticleSortField.VIEWS))).toEqual({
      ...state,
      sort: ArticleSortField.VIEWS
    });
  });

  test('test change profile data - setOrder', () => {
    expect(articlesPageReducer(state, articlesPageAction.setOrder('desc'))).toEqual({
      ...state,
      order: 'desc'
    });
  });

  test('test change profile data - setSearch', () => {
    expect(articlesPageReducer(state, articlesPageAction.setSearch('desc'))).toEqual({
      ...state,
      search: 'desc'
    });
  });

  test('test change type - setType', () => {
    expect(articlesPageReducer(state, articlesPageAction.setType(ArticleEnumType.IT))).toEqual({
      ...state,
      type: ArticleEnumType.IT
    });
  });
});
