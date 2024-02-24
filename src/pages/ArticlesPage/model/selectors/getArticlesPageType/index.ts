import { ArticleEnumType } from '@/entities/Article';

import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

export const getArticlesPageType = (state: StateSchema) =>
  state.articlesPage?.type ?? ArticleEnumType.ALL;
