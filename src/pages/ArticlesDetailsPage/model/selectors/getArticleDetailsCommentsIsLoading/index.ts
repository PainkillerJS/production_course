import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getArticleDetailsCommentsIsLoading = (state: StateSchema) =>
  state.articleDetailsComments?.isLoading ?? true;
