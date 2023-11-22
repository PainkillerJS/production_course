import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AddCommentFormSchema {
  text?: string;
  error?: string;
}

const initialState: AddCommentFormSchema = {
  text: '',
  error: undefined
};

const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    }
  }
});

export const { reducer: addCommentFormReducer, actions: addCommentFormAction } =
  addCommentFormSlice;
