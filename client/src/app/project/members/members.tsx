import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';

import { State } from 'app/shared/models';
import { applyQueryFilters } from 'app/shared/utils/filters';
import { Member } from './member.model';
import { MembersList } from './members-list';
import { MembersFilters } from './members-filters';
import { membersQueryFilters } from './members-query-filters';

import { members as mockMembers } from 'app/mocks';

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

    const filteredMembers = applyQueryFilters<Member>(
      mockMembers,
      props.location.search,
      membersQueryFilters
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
