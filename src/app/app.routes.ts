import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Project01Card } from '../projects/project-01-card/project-01-card';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'card', component: Project01Card }
];
