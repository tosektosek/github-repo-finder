import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getRepositoriesForUserWithoutForks } from '../shared/store/actions/repositories.actions';
import { SharedState } from '../shared/store/reducers';
import { getRepositories } from '../shared/store/selectors/repositories.selectors';

@Component({
  selector: 'app-repository-finder',
  templateUrl: './repository-finder.component.html',
  styleUrls: ['./repository-finder.component.scss'],
})
export class RepositoryFinderComponent implements OnInit {
  repositories$ = this.store.select(getRepositories);
  repositoriesForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
  });

  get username() {
    return this.repositoriesForm.get('username');
  }

  constructor(private store: Store<SharedState>) {}

  ngOnInit() {}

  findRepos() {
    this.store.dispatch(getRepositoriesForUserWithoutForks({ username: this.username.value }));
  }
}
