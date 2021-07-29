import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultComponent } from './screens/search-result/search-result.component';
import { UserSearchComponent } from './screens/user-search/user-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'user-search', pathMatch: 'prefix' },
  { path: 'user-search', component: UserSearchComponent },
  { path: 'search-result', component: SearchResultComponent },
  { path: 'search-result/:searchKey', component: SearchResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
