import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getArticleDetailsRecomendationsError = (state: StateSchema) =>
  state.articleDetailsPage?.recommendations?.error ?? '';
