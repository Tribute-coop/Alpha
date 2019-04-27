import { Custody } from './custody.enum';

export interface Project {
  custody: Custody;
  projectName: string;
  symbol: string;
  issuance: string;
}