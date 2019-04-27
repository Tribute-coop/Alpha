import {
  ProjectNewNameComponent,
  ProjectNewCustodyComponent,
  ProjectNewIssuanceComponent,
  ProjectNameSymbolComponent
} from './project-new';

export const projectNewPath = '/project/new';

export default [
  {
    path: `${projectNewPath}/name`,
    component: ProjectNewNameComponent
  },
  {
    path: `${projectNewPath}/custody`,
    component: ProjectNewCustodyComponent
  },
  {
    path: `${projectNewPath}/issuance`,
    component: ProjectNewIssuanceComponent
  },
  {
    path: `${projectNewPath}/symbol`,
    component: ProjectNameSymbolComponent
  }
];
