import { Role } from './role.enum';

export interface Member {
  id: string;
  name: string;
  role: Role;
  lastSeen: string;
  jobs: number;
  rewards: string;
  thumbnail: string;
}