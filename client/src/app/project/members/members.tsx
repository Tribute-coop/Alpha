import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import queryString from 'query-string';

import { QueryFilters, applyQueryFilters } from 'app/shared/utils/filters';
import { State } from '../../shared/models/state.model';
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
  const [membersState, setMembersState] = useState<State<Member>>({
    loaded: false,
    data: []
  });

  useEffect((): void => {
    setMembersState({
      loaded: true,
      data: mockMembers
    });
  }, []);

  useEffect((): void => {
    if (!membersState.loaded) {
      return;
    }

    const search = queryString.parse(props.location.search);
    const filteredMembers = applyQueryFilters<Member>(
      mockMembers,
      search,
      filters
    );

    setMembersState((prevMembersState): State<Member> => {
      return {
        ...prevMembersState,
        data: filteredMembers
      };
    });
  }, [membersState.loaded, props.location.search]);

  return (
    <div className="container-fluid">
      <div className="row">
        { membersState.loaded && (
          <div className="col-12 col-lg-9">
            <MembersFilters {...props } />
            <MembersList members={membersState.data} />
          </div>
        )}
      </div>
    </div>
  );
}
