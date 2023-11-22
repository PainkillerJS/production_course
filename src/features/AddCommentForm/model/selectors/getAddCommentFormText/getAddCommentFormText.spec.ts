import { type DeepPartial } from '@reduxjs/toolkit';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { getAddCommentFormText } from '.';

describe('test selector = getAddCommentFormText', () => {
  test('selector should return comment form text', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: 'test value'
      }
    };

    expect(getAddCommentFormText(state as StateSchema)).toBe('test value');
  });
});
