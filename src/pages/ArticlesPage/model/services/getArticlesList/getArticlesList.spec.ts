import { type ArticleModel, ArticleEnumType } from '@/entities/Article';

import { TestAsyncThunk } from '@/shared/config/tests/testAsyncThunk';

import { getArticlesListThunk } from '.';

describe('test asyncThunk - getArticlesListThunk', () => {
  test('get articles list', async () => {
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

    const thunk = new TestAsyncThunk(getArticlesListThunk);

    thunk.api.get.mockReturnValue(Promise.resolve({ data: articleData }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(articleData);
  });
});
