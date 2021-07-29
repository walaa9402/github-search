import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  // #region constructor

  constructor(private http: HttpClient) { }

  // #endregion

  // #region actions

  search(searchKey: string, perPage: number, page: number): Observable<any> {
    const url = `search/users?q=${searchKey}&per_page=${perPage}&page=${page}`;
    return this.http.get(url);
  }

  // #endregion
}
