import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageModule } from './module/first/first.module';
import { ExampleLinksComponent } from './page/example-links/example-links.component';
import { HomeComponent } from './component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './component/button/button.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { ComponentsPageComponent } from './component/components-page/components-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleLinksComponent,
    HomeComponent,
    ButtonComponent,
    ToolbarComponent,
    ComponentsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstPageModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
