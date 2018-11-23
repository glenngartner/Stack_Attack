import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CustomRouterModule} from './modules/custom-router.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {StackSearchComponent} from './stack-search/stack-search.component';
import { DocsComponent } from './docs/docs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    StackSearchComponent,
    DocsComponent
  ],
  imports: [
    BrowserModule,
    CustomRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
