import { type CommentModel } from '@/entities/Comment';

import { TestAsyncThunk } from '@/shared/config/tests/testAsyncThunk';

import { getCommentsByArticleIdThunk } from '.';

describe('test asyncThunk - getCommentsByArticleIdThunk', () => {
  test('get article detail comments data', async () => {
    const articleData: CommentModel[] = [
      {
        id: '1',
        text: 'test message',
        user: {
          _initied: true,
          id: '1',
          username: 'test username',
          avatar: 'test avatar'
        }
      }
    ];

    const thunk = new TestAsyncThunk(getCommentsByArticleIdThunk);

    thunk.api.get.mockReturnValue(Promise.resolve({ data: articleData }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(articleData);
  });
});
