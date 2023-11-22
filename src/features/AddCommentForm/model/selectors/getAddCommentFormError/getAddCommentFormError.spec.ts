import { type DeepPartial } from '@reduxjs/toolkit';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getAddCommentFormError } from '.';

describe('test selector = getAddCommentFormError', () => {
  test('selector should return comment form error', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: 'test value',
        error: 'error test'
      }
    };

    expect(getAddCommentFormError(state as StateSchema)).toBe('error test');
  });
});
