import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule, TabsModule } from 'ng2-bootstrap';

import { app_routes } from './app.routes';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppTitleComponent } from './app-title/app-title.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeliveriesListComponent } from './deliveries-list/deliveries-list.component';
import { AppGridComponent } from './app-grid/app-grid.component';
import { CreateDeliveryComponent } from './create-delivery/create-delivery.component';

import { DeliveryService } from './delivery.service'

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppTitleComponent,
    AboutMeComponent,
    PageNotFoundComponent,
    DeliveriesListComponent,
    AppGridComponent,
    CreateDeliveryComponent,
  ],
  imports: [
    BrowserModule,
    app_routes,
    AmazingTimePickerModule,
    FormsModule,
    HttpModule,
    Ng2TableModule,
    PaginationModule.forRoot(),
    TabsModule,
  ],
  providers: [
    DeliveryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }