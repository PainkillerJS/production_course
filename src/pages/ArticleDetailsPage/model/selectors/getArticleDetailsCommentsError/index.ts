import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getArticleDetailsCommentsError = (state: StateSchema) =>
  state.articleDetailsPage?.comments?.error ?? '';
