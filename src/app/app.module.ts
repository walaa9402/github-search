// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BlockUIModule } from 'ng-block-ui';

// component
import { AppComponent } from './app.component';
import { UserSearchComponent } from './screens/user-search/user-search.component';
import { SearchResultComponent } from './screens/search-result/search-result.component';

// interceptor
import { ApiInterceptor } from './core/interceptor/api.interceptor';
import { LoaderInterceptor } from './core/interceptor/loader.interceptor';

// module
import { AppRoutingModule } from './app-routing.module';

// services
import { GithubService } from './core/services/github.service';
import { LoaderService } from './core/services/loader.service';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BlockUIModule.forRoot(),
  ],
  providers: [
    GithubService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
