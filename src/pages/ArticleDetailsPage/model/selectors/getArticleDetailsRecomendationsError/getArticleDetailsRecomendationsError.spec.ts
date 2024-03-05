import { type DeepPartial } from '@reduxjs/toolkit';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getArticleDetailsRecomendationsError } from '.';

describe('test selector = getArticleDetailsRecomendationsError', () => {
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

    expect(getArticleDetailsRecomendationsError(state as StateSchema)).toBe('test error');
  });
});
