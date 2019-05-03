import { ContributionsAssignmentStatus } from './contributions-assignment-status.enum';
import { Member } from '../../members/member.model';

export interface ContributionsAssignment {
  id: string;
  title: string;
  status: ContributionsAssignmentStatus;
  assignedOn?: string;
  approvedOn?: string;
  startedOn?: string;
  domain: string;
  assignedTo: Member[];
  rewardAmount: number;
  rewardUnits: string;
}