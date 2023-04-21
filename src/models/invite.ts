import { Project } from './project';
import { User } from './user';

export interface Invite {
  id: string;
  fromUser: User;
  toUser: User;
  project: Project;
}
