import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SharedState } from '../shared/store/reducers';
import { getRepositories } from '../shared/store/selectors/repositories.selectors';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss'],
})
export class RepositoryListComponent {
  repositories$ = this.store.select(getRepositories);

  constructor(private store: Store<SharedState>) {}
}
