import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getArticlesPageIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading ?? false;
