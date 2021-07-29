import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})

export class UserSearchComponent implements OnInit {

  // #region declare variables

  searchKey: string;

  // #endregion

  // #region constructor

  constructor(
    private readonly router: Router
  ) { }

  // #endregion

  // #region ngOnInit

  ngOnInit(): void { }

  // #endregion

  // #region main actions

  navigateToSearchResultScreen(searchKey: string): void {
    if (searchKey) { this.router.navigate(['/search-result', searchKey]); }
    else { alert('Please make sure to insert value to search for.'); }
  }

  // #endregion

}
