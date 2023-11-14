import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getArticleDetailsData = (state: StateSchema) => state.articles?.data;
