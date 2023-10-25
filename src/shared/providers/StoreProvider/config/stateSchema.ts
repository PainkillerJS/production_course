import { type LoginSchema } from '@/features/AuthByUsername/model/slice';

import { type ProfileSchema } from '@/entities/Profile';
import { type UserState } from '@/entities/User';

export interface StateSchema {
  user: UserState;
  login: LoginSchema;
  profile: ProfileSchema;
}
