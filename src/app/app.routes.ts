import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Project01Card } from '../projects/project-01-card/project-01-card';
import { Project02Skullgirls } from '../projects/project-02-skullgirls/project-02-skullgirls';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'card', component: Project01Card },
    { path: 'skullgirls', component: Project02Skullgirls}
];
