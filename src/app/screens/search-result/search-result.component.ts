// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// models
import { UserSearchResultDto } from './search-result.model';

// service
import { GithubService } from 'src/app/core/services/github.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})

export class SearchResultComponent implements OnInit {

  // #region declare variables

  searchKey: string;
  searchResult: UserSearchResultDto;
  pageNumber: number;

  // #endregion

  // #region constructor

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly githubService: GithubService
  ) {
    // init variables
    this.searchResult = new UserSearchResultDto();
    this.pageNumber = 1;
  }

  // #endregion

  // #region ngOnInit

  ngOnInit(): void {
    this.getSearchKey();
  }

  getSearchKey(): void {
    this.route.params.subscribe(params => {
      if (params.searchKey) {
        this.searchKey = params.searchKey;
        this.search(this.searchKey);
      }
    });
  }

  // #endregion

  // #region load controls

  search(searchKey: string, perPage: number = 20, page: number = 1): void {
    this.githubService.search(searchKey, perPage, page).subscribe((res: UserSearchResultDto) => {
      this.searchResult = res;
    });
  }

  // #endregion

  // #region main actions

  navigateToSearchResultScreen(searchKey: string): void {
    if (searchKey) { this.router.navigate(['/search-result', searchKey]); }
    else { alert('Please make sure to insert value to search for.'); }
  }

  previousPage(): void {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.search(this.searchKey, 12, this.pageNumber);
    }
  }

  nextPage(): void {
    if (this.pageNumber < this.searchResult.total_count / 12) {
      this.pageNumber++;
      this.search(this.searchKey, 12, this.pageNumber);
    }
  }

  navigateToUrl(url: string): void {
    window.open(url, 'blank');
  }

  // #endregion
}
