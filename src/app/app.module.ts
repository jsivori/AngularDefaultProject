import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AmazingTimePickerModule } from 'amazing-time-picker';

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
    app_routes,
    AmazingTimePickerModule,
  ],
  providers: [
    DeliveryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from '../app/routes/app.router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { AddDeliveryComponent } from './components/add-delivery-component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import {PopupModule} from 'ng2-opd-popup';
import { GridComponent } from './components/grid-component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AddDeliveryComponent,
    GridComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    AmazingTimePickerModule,
    PopupModule.forRoot(),
    Ng2TableModule,
    PaginationModule.forRoot(),
    TabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

*/ 