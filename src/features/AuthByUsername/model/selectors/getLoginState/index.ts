import { type StateSchema } from '@/shared/providers/StoreProvider/config/stateSchema';

import { type LoginSchema } from '../../slice';

export const getLoginState = (state: StateSchema) => state?.login ?? ({} as LoginSchema);
