import { type DeepPartial } from '@reduxjs/toolkit';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getArticleDetailsRecomendationsIsLoading } from '.';

describe('test selector = getArticleDetailsRecomendationsIsLoading', () => {
  test('selector should return article details recomedation loading', () => {
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

    expect(getArticleDetailsRecomendationsIsLoading(state as StateSchema)).toBe(true);
  });
});
