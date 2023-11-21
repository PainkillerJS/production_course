import { type DeepPartial } from '@reduxjs/toolkit';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getArticleDetailsCommentsIsLoading } from '.';

describe('test selector = getArticleDetailsCommentsIsLoading', () => {
  test('selector should return article details comments loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        isLoading: true,
        ids: [],
        entities: {}
      }
    };

    expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toBe(true);
  });
});
