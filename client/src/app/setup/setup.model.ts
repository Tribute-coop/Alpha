export enum Custody {
  BanckAccount,
  SmartContract
}

export interface Setup {
  custody: Custody;
  projectName: string;
  symbol: string;
  issuance: number;
}