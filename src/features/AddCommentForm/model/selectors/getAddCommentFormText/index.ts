import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getAddCommentFormText = (state: StateSchema) => state.addCommentForm?.text ?? '';
