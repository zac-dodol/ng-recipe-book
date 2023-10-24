import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageModule } from './module/first/first.module';
import { ExampleLinksComponent } from './page/example-links/example-links.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
