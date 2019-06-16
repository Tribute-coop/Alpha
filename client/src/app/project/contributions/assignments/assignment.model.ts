import { AssignmentStates } from './assignment-status.enum';
import { Member } from '../../members/member.model';

export interface Assignment {
  id: string;
  title: string;
  description?: string;
  status: AssignmentStates;
  assignedOn?: string;
  approvedOn?: string;
  startedOn?: string;
  domain: string;
  assignedTo: Member[];
  rewardAmount: number;
  rewardUnits: string;
}