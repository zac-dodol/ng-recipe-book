import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './module/first/first-page/first-page.component';
import { ExampleLinksComponent } from './page/example-links/example-links.component';
import { HomeComponent } from './component/home/home.component';
import { ComponentsPageComponent } from './component/components-page/components-page.component';

const routes: Routes = [
  // define routes
  { path: '', component: HomeComponent },
  { path: 'first-page', component: FirstPageComponent },
  { path: 'example-page', component: ExampleLinksComponent },
  { path: 'components-page', component: ComponentsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
