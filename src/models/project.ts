import { User } from './user';

export interface Project {
  id: string;
  name: string;
  members: User[];
  lastSaved: Date;
}
