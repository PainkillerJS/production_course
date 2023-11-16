import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getArticleDetailsIsLoading = (state: StateSchema) => state.articles?.isLoading ?? true;
