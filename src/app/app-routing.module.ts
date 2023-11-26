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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
