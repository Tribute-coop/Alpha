import { Member } from './members/member.model';
import { AssignmentStatus } from './contributions/assignments/assignment-status.enum';
import { Assignment } from './contributions/assignments/assignment.model';
import { Role } from './members/role.enum';

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
    status: AssignmentStatus.InProgress,
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
    status: AssignmentStatus.Assigned,
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
    status: AssignmentStatus.Assigned,
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
    status: AssignmentStatus.InProgress,
    assignedOn: '',
    approvedOn: '',
    startedOn: '12/02/19',
    domain: 'marketing',
    assignedTo: [members[1], members[2]],
    rewardAmount: 18,
    rewardUnits: 'CTX'
  }
];
