import { ArticleListView } from '@/entities/Article';

import { TestAsyncThunk } from '@/shared/config/tests/testAsyncThunk';

import { getNextArticlesListThunk } from '.';

describe('test asyncThunk - getNextArticlesListThunk', () => {
  test('dispatch next page', async () => {
    const thunk = new TestAsyncThunk(getNextArticlesListThunk, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        isHasMore: true,
        view: ArticleListView.SMALL
      }
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(getNextArticlesListThunk, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        isHasMore: false,
        view: ArticleListView.SMALL
      }
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
  });
});
