import { AccountPageComponent } from './component/account-page/account-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './module/first/first-page/first-page.component';
import { ExampleLinksComponent } from './page/example-links/example-links.component';
import { HomeComponent } from './component/home/home.component';
import { ComponentsPageComponent } from './component/components-page/components-page.component';
import { ServersComponent } from './component/servers/servers.component';
import { RecipePageComponent } from './project-recipe/recipe-page/recipe-page.component';
import { CountGameComponent } from './component/count-game/count-game.component';
import { RecipesComponent } from './project-recipe/recipes/recipes.component';
import { ShoppingListComponent } from './project-recipe/shopping-list/shopping-list.component';
import { IfForComponent } from './component/if-for/if-for.component';
import { MockDataComponent } from './component/mock-data/mock-data.component';
import { RoutingPageComponent } from './routing/routing-page/routing-page.component';
import { RoutingHomeComponent } from './routing/routing-home/routing-home.component';
import { RoutingUsersComponent } from './routing/routing-users/routing-users.component';
import { RoutingServersComponent } from './routing/routing-servers/routing-servers.component';
import { RoutingUserComponent } from './routing/routing-users/routing-user/routing-user.component';
import { RoutingEditServerComponent } from './routing/routing-servers/routing-edit-server/routing-edit-server.component';
import { RoutingServerComponent } from './routing/routing-servers/routing-server/routing-server.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { AuthGuardService } from './guard/auth-guard.service';
import { NotAllowedComponent } from './page/not-allowed/not-allowed.component';
import { CanDeactivateGuardService } from './guard/can-deactivate-guard.service';
import { ErrorPageComponent } from './page/error-page/error-page.component';
import { ServerResolverService } from './resolver/server-resolver.service';

const routes: Routes = [
  // define routes
  { path: '', component: HomeComponent },
  { path: 'first-page', component: FirstPageComponent },
  { path: 'example-page', component: ExampleLinksComponent },
  { path: 'components-page', component: ComponentsPageComponent },
  { path: 'server-page', component: ServersComponent },
  { path: 'recipe-page', component: RecipePageComponent },
  { path: 'game-page', component: CountGameComponent },
  { path: 'recipe', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'if-for-page', component: IfForComponent },
  { path: 'mock-data', component: MockDataComponent },
  { path: 'account-page', component: AccountPageComponent },
  {
    path: 'routing-pagination',
    component: RoutingPageComponent,
    children: [
      { path: 'routing-home', component: RoutingHomeComponent },
      {
        path: 'routing-users',
        component: RoutingUsersComponent,
        children: [{ path: ':id/:name', component: RoutingUserComponent }],
      },
      {
        path: 'routing-servers',
        component: RoutingServersComponent,
        // guards the whole path
        // canActivate: [AuthGuardService],

        // guards only the path children when action
        canActivateChild: [AuthGuardService],
        children: [
          {
            path: ':id',
            component: RoutingServerComponent,
            resolve: { server: ServerResolverService },
          },
          {
            path: ':id/edit',
            component: RoutingEditServerComponent,
            canDeactivate: [CanDeactivateGuardService],
          },
        ],
      },
    ],
  },
  // permission required
  { path: 'not-allowed', component: NotAllowedComponent },
  // 404 route & to change the url to be nicely worded
  { path: 'not-found', component: PageNotFoundComponent },
  // error page with data from url
  {
    path: 'error-page',
    component: ErrorPageComponent,
    data: { message: 'Page not found!' },
  },
  { path: '**', redirectTo: 'error-page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
