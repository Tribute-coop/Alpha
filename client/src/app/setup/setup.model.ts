export enum Custody {
  BankAccount = '0',
  SmartContract = '1'
}

export interface Setup {
  custody: Custody;
  projectName: string;
  symbol: string;
  issuance: string;
}