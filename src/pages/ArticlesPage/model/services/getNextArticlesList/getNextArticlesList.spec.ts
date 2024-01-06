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
        view: ArticleListView.SMALL,
        _initied: false
      }
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
  });
});
