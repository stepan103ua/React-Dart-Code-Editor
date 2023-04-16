import { User } from './user';

export interface Project {
  name: string;
  members: User[];
}
