import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

export const routes = [
  {
    path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
