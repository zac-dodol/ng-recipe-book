import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageModule } from './module/first/first.module';
import { ExampleLinksComponent } from './page/example-links/example-links.component';
import { WarningAlertComponent } from './component/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './component/success-alert/success-alert.component';
import { HomeComponent } from './component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './component/button/button.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleLinksComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    HomeComponent,
    ButtonComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstPageModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
