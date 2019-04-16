import {
  WelcomeSetupComponent,
  ProjectNameSetupComponent,
  CustodySetupComponent,
  IssuanceSetupComponent,
  SymbolSetupComponent
} from "./steps";

export default [
  {
    path: "/welcome",
    component: WelcomeSetupComponent
  },
  {
    path: "/project-name",
    component: ProjectNameSetupComponent
  },
  {
    path: "/custody",
    component: CustodySetupComponent
  },
  {
    path: "/issuance",
    component: IssuanceSetupComponent
  },
  {
    path: "/symbol",
    component: SymbolSetupComponent
  }
];
