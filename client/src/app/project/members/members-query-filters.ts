import { QueryFilters } from 'app/shared/utils/filters';
import { contains } from 'app/shared/utils/helpers';
import { Member } from './member.model';

export const membersQueryFilters: QueryFilters<Member> = {
  q: (member: Member, q: string): boolean =>
    contains(member.id, q) ||
    contains(member.name, q)
  ,
  role: (member: Member, role: string): boolean =>
    member.role === +role
};