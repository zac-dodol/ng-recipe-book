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
import { RecipePageComponent } from './project-recipe/recipe-page/recipe-page.component';
import { RecipesComponent } from './project-recipe/recipes/recipes.component';
import { RecipesListComponent } from './project-recipe/recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './project-recipe/recipes/recipes-detail/recipes-detail.component';
import { ShoppingListComponent } from './project-recipe/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './project-recipe/shopping-list/shopping-edit/shopping-edit.component';
import { RecipesItemComponent } from './project-recipe/recipes/recipes-list/recipes-item/recipes-item.component';
import { ServerElementComponent } from './component/server-element/server-element.component';
import { ServerCockpitComponent } from './component/server-cockpit/server-cockpit.component';
import { GameControlComponent } from './component/game-control/game-control.component';
import { OddComponent } from './component/odd/odd.component';
import { EvenComponent } from './component/even/even.component';
import { CountGameComponent } from './component/count-game/count-game.component';
import { IfForComponent } from './component/if-for/if-for.component';
import { BasicHighlightDirective } from './directive/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directive/better-highlight/better-highlight.directive';
import { BindingDirectiveDirective } from './directive/binding-directive/binding-directive.directive';
import { UnlessDirective } from './directive/unless/unless.directive';
import { DropdownDirectiveDirective } from './directive/dropdown-directive/dropdown-directive.directive';
import { MockDataComponent } from './component/mock-data/mock-data.component';
import { AccountPageComponent } from './component/account-page/account-page.component';
import { NewAccountComponent } from './component/new-account/new-account.component';
import { AccountComponent } from './component/account/account.component';
import { ActiveUserComponent } from './component/active-user/active-user.component';
import { InactiveUserComponent } from './component/inactive-user/inactive-user.component';
import { ShoppingListService } from './project-recipe/shopping-list/shopping-list.service';
import { RoutingPageComponent } from './routing/routing-page/routing-page.component';
import { RoutingHomeComponent } from './routing/routing-home/routing-home.component';
import { RoutingUsersComponent } from './routing/routing-users/routing-users.component';
import { RoutingServersComponent } from './routing/routing-servers/routing-servers.component';
import { RoutingEditServerComponent } from './routing/routing-servers/routing-edit-server/routing-edit-server.component';
import { RoutingServerComponent } from './routing/routing-servers/routing-server/routing-server.component';
import { RoutingUserComponent } from './routing/routing-users/routing-user/routing-user.component';
import { ServesService } from './routing/routing-servers/serves.service';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { AuthService } from './guard/auth.service';
import { AuthGuardService } from './guard/auth-guard.service';
import { NotAllowedComponent } from './page/not-allowed/not-allowed.component';
import { CanDeactivateGuardService } from './guard/can-deactivate-guard.service';

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
    GameControlComponent,
    OddComponent,
    EvenComponent,
    CountGameComponent,
    IfForComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    BindingDirectiveDirective,
    UnlessDirective,
    DropdownDirectiveDirective,
    MockDataComponent,
    AccountPageComponent,
    NewAccountComponent,
    AccountComponent,
    ActiveUserComponent,
    InactiveUserComponent,
    RoutingPageComponent,
    RoutingHomeComponent,
    RoutingUsersComponent,
    RoutingServersComponent,
    RoutingEditServerComponent,
    RoutingServerComponent,
    RoutingUserComponent,
    PageNotFoundComponent,
    NotAllowedComponent,
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
  providers: [
    ShoppingListService,
    ServesService,
    AuthService,
    AuthGuardService,
    CanDeactivateGuardService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
