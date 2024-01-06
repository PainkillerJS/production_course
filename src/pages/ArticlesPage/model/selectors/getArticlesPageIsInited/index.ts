import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getArticlesPageIsInited = (state: StateSchema) =>
  state.articlesPage?._initied ?? false;
