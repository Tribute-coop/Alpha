import { Assignment } from '../assignment.model';
import { AssignmentsEditProps } from '../assignments-edit/assignments-edit-props';

export interface AssignmentsDetailProps extends AssignmentsEditProps {
  assignment?: Assignment;
}