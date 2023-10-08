import { type CounterState } from '@/entities/conter';
import { type UserState } from '@/entities/User';

export interface StateSchema {
  counter: CounterState;
  user: UserState;
}
