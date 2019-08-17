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
