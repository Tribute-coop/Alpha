import {
  ProjectNameSetupComponent,
  CustodySetupComponent,
  IssuanceSetupComponent,
  SymbolSetupComponent
} from './steps';

const parentRoute = '/setup';

export default [
  {
    path: `${parentRoute}/project-name`,
    component: ProjectNameSetupComponent
  },
  {
    path: `${parentRoute}/custody`,
    component: CustodySetupComponent
  },
  {
    path: `${parentRoute}/issuance`,
    component: IssuanceSetupComponent
  },
  {
    path: `${parentRoute}/symbol`,
    component: SymbolSetupComponent
  }
];
