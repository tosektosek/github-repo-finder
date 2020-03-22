import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getRepositoriesForUserWithoutForks } from '../shared/store/actions/repositories.actions';
import { SharedState } from '../shared/store/reducers';

@Component({
  selector: 'app-repository-finder',
  templateUrl: './repository-finder.component.html',
  styleUrls: ['./repository-finder.component.scss'],
})
export class RepositoryFinderComponent {
  repositoriesForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
  });

  get username() {
    return this.repositoriesForm.get('username');
  }

  constructor(private store: Store<SharedState>) {}

  findRepos() {
    this.store.dispatch(
      getRepositoriesForUserWithoutForks({ username: this.username.value }),
    );
  }
}
