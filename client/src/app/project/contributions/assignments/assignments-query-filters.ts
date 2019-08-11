import { QueryFilters } from 'app/shared/utils/filters';
import { contains } from 'app/shared/utils/helpers';
import { Assignment } from './assignment.model';

export const assignmentsQueryFilters: QueryFilters<Assignment> = {
  q: (assignment: Assignment, q: string): boolean =>
    contains(assignment.title, q)
  ,
  domain: (assignment: Assignment, domain: string): boolean =>
    assignment.domain === domain
  ,
  status: (assignment: Assignment, status: string): boolean =>
    assignment.status === +status
  ,
  who: (assignment: Assignment, userId: string): boolean =>
    assignment.assignedTo.some((assigned): boolean => assigned.id === userId)
};