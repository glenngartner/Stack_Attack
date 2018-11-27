import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {CustomRouterModule} from './modules/custom-router.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {StackSearchComponent} from './stack-search/stack-search.component';
import { DocsComponent } from './docs/docs.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    StackSearchComponent,
    DocsComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    CustomRouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
