import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 

import { app_routes } from './app.routes';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppTitleComponent } from './app-title/app-title.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeliveriesListComponent } from './deliveries-list/deliveries-list.component';
import { AppGridComponent } from './app-grid/app-grid.component';
import { CreateDeliveryComponent } from './create-delivery/create-delivery.component';
import { EditDeliveryComponent } from './edit-delivery/edit-delivery.component';

import { DeliveryService } from './delivery.service'

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppTitleComponent,
    AppFooterComponent,
    FullScreenComponent,
    AboutMeComponent,
    PageNotFoundComponent,
    DeliveriesListComponent,
    AppGridComponent,
    CreateDeliveryComponent,
    EditDeliveryComponent
  ],
  imports: [
    BrowserModule,
    app_routes
  ],
  providers: [
    DeliveryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
