import { Component } from '@angular/core';
import { LoaderService } from './core/services/loader.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Wires up BlockUI instance
  @BlockUI() blockUI!: NgBlockUI;

  constructor(public loaderService: LoaderService) {
    this.blockUI.start('');
  }
}
