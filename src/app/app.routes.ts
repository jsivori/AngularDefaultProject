import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppTitleComponent } from './app-title/app-title.component';
import { DeliveriesListComponent } from './deliveries-list/deliveries-list.component';
import { CreateDeliveryComponent } from './create-delivery/create-delivery.component';
import { EditDeliveryComponent } from './edit-delivery/edit-delivery.component';

const appRoutes: Routes = [
  { path: '', component: AppTitleComponent },
  { path: 'home', component: AppTitleComponent },
  { path: 'index', component: DeliveriesListComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'create', component: CreateDeliveryComponent },
  { path: 'edit/:id', component: EditDeliveryComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const app_routes = RouterModule.forRoot(appRoutes);