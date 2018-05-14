import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppTitleComponent } from './app-title/app-title.component';

const appRoutes: Routes = [
  { path: '', component: AppTitleComponent },
  { path: 'home', component: AppTitleComponent },
  { path: 'about', component: AboutMeComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const app_routes = RouterModule.forRoot(appRoutes);