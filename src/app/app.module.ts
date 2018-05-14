import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppTitleComponent } from './app-title/app-title.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { app_routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppTitleComponent,
    AppFooterComponent,
    FullScreenComponent,
    AboutMeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    app_routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
