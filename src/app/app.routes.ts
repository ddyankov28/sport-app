import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Map } from './map/map';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'map', component: Map },
  { path: '**', redirectTo: '/home' }
];
