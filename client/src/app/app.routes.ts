import { HomeComponent } from './home';
import { ProjectNewComponent } from './project';
import { NotFoundComponent } from './shared/components';

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
