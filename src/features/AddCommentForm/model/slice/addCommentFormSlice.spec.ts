import { type AddCommentFormSchema, addCommentFormAction, addCommentFormReducer } from '.';

describe('test slice = addCommentFormSlice', () => {
  test('test change profile data - updateIsReadonly', () => {
    const state: AddCommentFormSchema = {
      error: undefined,
      text: ''
    };

    expect(addCommentFormReducer(state, addCommentFormAction.setText('test text'))).toEqual({
      error: undefined,
      text: 'test text'
    });
  });
});
