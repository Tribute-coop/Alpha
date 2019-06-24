import { Member } from '../members/member.model';

export interface TokenOperation {
  id: string;
  operation: TokenOperationType;
  createdAt: Date;
  amount: number;
  units: string;
  creator: Member;
}

export enum TokenOperationType {
  Redeem,
  Budget,
  BudgetLegal,
  AddFunds,
}

export interface TokenOperationState {
  id: string;
  name: string;
}

export function getTokenOperations(): TokenOperationState[] {
  const filterTrnsKey = 'project.tokens.filters';

  return Object.keys(TokenOperationType)
    .filter((s): boolean => !isNaN(+s))
    .map((id: string): TokenOperationState => {
      const status = TokenOperationType[+id].toLowerCase();
      const name = filterTrnsKey + '.' + status;

      return { id, name };
    });
}
