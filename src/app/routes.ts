import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'show/:id',
    component: ShowComponent,
  },
];

export default routeConfig;