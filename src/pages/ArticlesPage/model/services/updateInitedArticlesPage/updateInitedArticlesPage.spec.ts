import { ArticleEnumType, ArticleListView, ArticleSortField } from '@/entities/Article';

import { TestAsyncThunk } from '@/shared/config/tests/testAsyncThunk';

import { updateInitedArticlesPageThunk } from '.';

describe('test asyncThunk - getNextArticlesListThunk', () => {
  test('dispatch next page', async () => {
    const thunk = new TestAsyncThunk(updateInitedArticlesPageThunk, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        isHasMore: true,
        view: ArticleListView.SMALL,
        _initied: false,
        sort: ArticleSortField.CREATED,
        search: '',
        order: 'asc',
        type: ArticleEnumType.ALL
      }
    });

    await thunk.callThunk(new URLSearchParams());

    expect(thunk.dispatch).toBeCalledTimes(4);
  });
});
