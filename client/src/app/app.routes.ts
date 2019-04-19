import { HomeComponent } from './home';
import { NotFoundComponent } from './shared';
import { ProjectNewComponent } from './project';

export default [
  {
    path: '/project/new',
    exact: false,
    component: ProjectNewComponent
  },
  {
    path: '/',
    exact: true,
    component: HomeComponent
  },
  {
    component: NotFoundComponent
  }
];
