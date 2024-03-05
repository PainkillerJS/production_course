import { type DeepPartial } from '@reduxjs/toolkit';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getArticleDetailsCommentsIsLoading } from '.';

describe('test selector = getArticleDetailsCommentsIsLoading', () => {
  test('selector should return article details comments loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: {
          isLoading: true,
          ids: [],
          entities: {},
          error: 'test error'
        },
        recommendations: {
          isLoading: true,
          ids: [],
          entities: {},
          error: 'test error'
        }
      }
    };

    expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toBe(true);
  });
});
