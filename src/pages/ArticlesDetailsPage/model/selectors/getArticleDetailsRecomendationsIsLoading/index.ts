import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getArticleDetailsRecomendationsIsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.recommendations?.isLoading ?? true;
