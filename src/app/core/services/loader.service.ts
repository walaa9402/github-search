import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loading: boolean | undefined;
  isLoading = new BehaviorSubject(false);

  afterLoadAllRequestsFunctions: Function[];

  constructor() {
    this.afterLoadAllRequestsFunctions = [];
    this.isLoading.subscribe((result) => {
      this.loading = result;
    });
  }

  addAfterAllRequestsHandler(fn: Function): void {
    this.afterLoadAllRequestsFunctions.push(fn);
  }

  handleAfterAllRequestsFunctions(): void {
    this.afterLoadAllRequestsFunctions.map(fn => fn());
  }
}
