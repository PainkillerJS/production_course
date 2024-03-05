import {
  type ArticleModel,
  ArticleEnumType,
  ArticleListView,
  ArticleSortField
} from '@/entities/Article';

import { TestAsyncThunk } from '@/shared/config/tests/testAsyncThunk';

import { getArticlesRecommendationsThunk } from '.';

describe('test asyncThunk - getArticlesRecommendationsThunk', () => {
  test('get articles recommendations', async () => {
    const articleData: ArticleModel[] = [
      {
        id: '1',
        title: 'test title',
        subtitle: 'test subtitle',
        img: '',
        blocks: [],
        views: 100,
        user: {
          _initied: true
        },
        createdAt: '21.01.2001',
        type: [ArticleEnumType.IT]
      }
    ];

    const thunk = new TestAsyncThunk(getArticlesRecommendationsThunk, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        isHasMore: false,
        view: ArticleListView.SMALL,
        _initied: false,
        sort: ArticleSortField.CREATED,
        search: '',
        order: 'asc',
        type: ArticleEnumType.ALL
      }
    });

    thunk.api.get.mockReturnValue(Promise.resolve({ data: articleData }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(articleData);
  });
});
