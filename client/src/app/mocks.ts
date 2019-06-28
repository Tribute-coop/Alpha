import { Member } from './project/members/member.model';
import { TokenOperation, TokenOperationType } from './project/tokens/token.model';
import { Role } from './project/members/role.enum';
import { AssignmentStates } from './project/contributions/assignments/assignment-status.enum';
import { Assignment } from './project/contributions/assignments/assignment.model';
import { Domain } from './project/contributions/assignments/domain.model';

export const members: Member[] = [
  { id: '@zunith', name: 'Zuna G.', role: Role.Owner, jobs: 8, lastSeen: 'Today', rewards: '1,200 CTX', thumbnail: 'https://picsum.photos/id/1084/50/50' },
  { id: '@Aleez87', name: 'Ali Muzammal', role: Role.Contributor, jobs: 12, lastSeen: 'This week', rewards: '800 CTX', thumbnail: 'https://picsum.photos/id/40/50/50' },
  { id: '@Armanik98', name: 'Armand L.', role: Role.Contributor, jobs: 1, lastSeen: 'This week', rewards: '250 CTX', thumbnail: 'https://picsum.photos/id/100/50/50' },
  { id: '@AnnCapistrano', name: 'Ann Capistrano', role: Role.Contributor, jobs: 3, lastSeen: '1 month ago', rewards: '270 CTX', thumbnail: 'https://picsum.photos/id/1/50/50' }
];

export const assignments: Assignment[] = [
  {
    id: '000001',
    title: 'Define brand guidelines',
    status: AssignmentStates.Approved,
    assignedOn: 'Run twitter campaign March 2019',
    approvedOn: '',
    startedOn: '',
    domain: 'marketing',
    assignedTo: [members[0]],
    rewardAmount: 15,
    rewardUnits: 'CTX'
  },
  {
    id: '000002',
    title: 'Update our slides deck',
    status: AssignmentStates.Assigned,
    assignedOn: '23/01/19',
    approvedOn: '02/02/19',
    startedOn: '',
    domain: 'development',
    assignedTo: members,
    rewardAmount: 9,
    rewardUnits: 'CTX'
  },
  {
    id: '000003',
    title: 'Run twitter campaign March 2019',
    status: AssignmentStates.Assigned,
    assignedOn: '24/01/19',
    approvedOn: '',
    startedOn: '',
    domain: 'marketing',
    assignedTo: [members[2]],
    rewardAmount: 550,
    rewardUnits: 'CTX'
  },
  {
    id: '000004',
    title: 'Write security paper',
    status: AssignmentStates.InProgress,
    assignedOn: '',
    approvedOn: '',
    startedOn: '12/02/19',
    domain: 'marketing',
    assignedTo: [members[1], members[2]],
    rewardAmount: 18,
    rewardUnits: 'CTX'
  }
];

export const domains: Domain[] = [
  { id: 'MKT', name: 'marketing' },
  { id: 'DEV', name: 'development' }
];

export const tokenOperations: TokenOperation[] = [
  { id: '0xb4bc263278d3f77a652a8d73a6bfd8ec0ba1a63923bbb4f38147fb8a943da26d', operation: TokenOperationType.Redeem, createdAt: new Date(), amount: -500, units: 'CTX', creator: members[0] },
  { id: '0xb4bc263278d3f77a652a8d73a6bfd8ec0ba1a63923bbb4f38147fb8a943da26c', operation: TokenOperationType.Budget, createdAt: new Date(), amount: 30000, units: 'CTX', creator: members[1] },
  { id: '0xb4bc263278d3f77a652a8d73a6bfd8ec0ba1a63923bbb4f38147fb8a943da26e', operation: TokenOperationType.AddFunds, createdAt: new Date(), amount: 230, units: 'ETH', creator: members[3] },
  { id: '0xb4bc263278d3f77a652a8d73a6bfd8ec0ba1a63923bbb4f38147fb8a943da26f', operation: TokenOperationType.Redeem, createdAt: new Date(), amount: -150, units: 'CTX', creator: members[0] },
  { id: '0xb4bc263278d3f77a652a8d73a6bfd8ec0ba1a63923bbb4f38147fb8a943da26g', operation: TokenOperationType.BudgetLegal, createdAt: new Date(), amount: 25000, units: 'CTX', creator: members[1] },
  { id: '0xb4bc263278d3f77a652a8d73a6bfd8ec0ba1a63923bbb4f38147fb8a943da26h', operation: TokenOperationType.AddFunds, createdAt: new Date(), amount: 8000, units: 'EUR', creator: members[3] }
];
