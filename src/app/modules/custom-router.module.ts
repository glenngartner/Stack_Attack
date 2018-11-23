import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {StackSearchComponent} from '../stack-search/stack-search.component';
import {DocsComponent} from '../docs/docs.component';

const appRoutes: Routes = [
  {path: 'stack_search', component: StackSearchComponent},
  {path: 'docs', component: DocsComponent},
  {path: '', redirectTo: '/stack_search', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [RouterModule]
})

export class CustomRouterModule {
}

