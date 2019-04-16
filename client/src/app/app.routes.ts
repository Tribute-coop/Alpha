import { SetupComponent } from "./setup";
import { HomeComponent } from "./home";
import { NotFoundComponent } from "./shared";

export default [
  {
    path: "/setup",
    exact: false,
    component: SetupComponent
  },
  {
    path: "/",
    exact: true,
    component: HomeComponent
  },
  {
    component: NotFoundComponent
  }
];
