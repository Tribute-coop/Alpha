export enum AssignmentStates {
  Approved,
  Assigned,
  InProgress
}

export interface AssignmentState {
  id: string;
  name: string;
}

export function getAssignmentStatus(): AssignmentState[] {
  const filterTrnsKey = 'project.contributions.assignment.filters';

  return Object.keys(AssignmentStates)
    .filter((s): boolean => !isNaN(+s))
    .map((id: string): AssignmentState => {
      const status = AssignmentStates[+id].toLowerCase();
      const name = filterTrnsKey + '.' + status;

      return { id, name };
    });
}
