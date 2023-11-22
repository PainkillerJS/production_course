import { type UserState } from '@/entities/User';

export interface CommentModel {
  id: string;
  user: Required<UserState>;
  text: string;
}
