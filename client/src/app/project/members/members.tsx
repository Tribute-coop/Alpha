import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import queryString from 'query-string';

import { QueryFilters, applyQueryFilters } from 'app/core/utils/filters';
import { MembersFilters } from './members-filters';
import { MembersList } from './members-list';
import { Member } from './member.model';

import { members as mockMembers } from 'app/mocks';

function contains(text: string, searchString: string): boolean {
  return text.toLowerCase().includes(searchString);
}

const filters: QueryFilters<Member> = {
  q: (member: Member, q: string): boolean =>
    contains(member.id, q) ||
    contains(member.name, q)
  ,
  role: (member: Member, role: string): boolean =>
    member.role === +role
};

export function Members(props: RouteComponentProps): JSX.Element {
  const [members, setMembers] = useState<Member[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect((): void => {
    setLoaded(true);
    setMembers(mockMembers);
  }, []);

  useEffect((): void => {
    if (!loaded) {
      return;
    }

    const search = queryString.parse(props.location.search);
    const filteredMembers = applyQueryFilters<Member>(
      mockMembers,
      search,
      filters
    );

    setMembers(filteredMembers);
  }, [loaded, props.location.search]);

  return (
    <div className="container-fluid">
      <div className="row">
        { loaded && (
          <div className="col-12 col-lg-9">
            <MembersFilters {...props } />
            <MembersList members={members} />
          </div>
        )}
      </div>
    </div>
  );
}
