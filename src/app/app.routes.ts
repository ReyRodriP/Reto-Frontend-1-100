import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Project01Card } from '../projects/project-01-card/project-01-card';
import { Project02Skullgirls } from '../projects/project-02-skullgirls/project-02-skullgirls';
import { Project03Dashboard } from '../projects/project-03-dashboard/project-03-dashboard';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'card', component: Project01Card },
    { path: 'skullgirls', component: Project02Skullgirls},
    { path: 'dashboard', component: Project03Dashboard}
];
