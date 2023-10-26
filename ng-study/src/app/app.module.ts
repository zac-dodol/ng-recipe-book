import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageModule } from './module/first/first.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './component/home/home.component';
import { ExampleLinksComponent } from './page/example-links/example-links.component';
import { ButtonComponent } from './component/button/button.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { ComponentsPageComponent } from './component/components-page/components-page.component';
import { ServersComponent } from './component/servers/servers.component';
import { ServerComponent } from './component/server/server.component';
import { HeaderComponent } from './component/header/header.component';
import { RecipePageComponent } from './page/recipe-page/recipe-page.component';
import { RecipesComponent } from './component/recipes/recipes.component';
import { RecipesListComponent } from './component/recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './component/recipes/recipes-detail/recipes-detail.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './component/shopping-list/shopping-edit/shopping-edit.component';
import { RecipesItemComponent } from './component/recipes/recipes-list/recipes-item/recipes-item.component';
import { ServerElementComponent } from './component/server-element/server-element.component';
import { ServerCockpitComponent } from './component/server-cockpit/server-cockpit.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleLinksComponent,
    HomeComponent,
    ButtonComponent,
    ToolbarComponent,
    ComponentsPageComponent,
    ServersComponent,
    ServerComponent,
    HeaderComponent,
    RecipePageComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesItemComponent,
    ServerElementComponent,
    ServerCockpitComponent,
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
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
