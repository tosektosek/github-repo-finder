import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Branch, Repository } from '../../model/repository.model';
import { GithubService } from '../../service/github.service';
import {
  getBranchesForRepository,
  getBranchesForRepositoryFailure,
  getBranchesForRepositorySuccess,
  getRepositoriesForUserWithoutForks,
  getRepositoriesForUserWithoutForksFailue,
  getRepositoriesForUserWithoutForksSuccess,
} from '../actions/repositories.actions';
import { SharedState } from '../reducers';

@Injectable()
export class RepositoriesEffects {
  constructor(
    private actions$: Actions,
    private githubService: GithubService,
    private store: Store<SharedState>,
  ) {}

  getRepositoriesForUserWithoutForks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRepositoriesForUserWithoutForks),
      switchMap(({ username }) =>
        this.githubService.getAllReposForUser(username).pipe(
          tap((repositories: Repository[]) =>
            repositories.forEach(repo => {
              this.store.dispatch(
                getBranchesForRepository({ repoName: repo.full_name }),
              );
            }),
          ),
          map((repositories: Repository[]) =>
            repositories.filter(repo => !repo.fork),
          ),
          map((repositories: Repository[]) =>
            getRepositoriesForUserWithoutForksSuccess({ repositories }),
          ),

          catchError(() => {
            this.store.dispatch(
              getRepositoriesForUserWithoutForksFailue({
                message: 'Error while fetching repos',
              }),
            );
            return EMPTY;
          }),
        ),
      ),
    ),
  );

  getBrancherForRepository$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBranchesForRepository),
      mergeMap(({ repoName }) =>
        this.githubService.getRepoDetails(repoName).pipe(
          map((branches: Branch[]) =>
            getBranchesForRepositorySuccess({
              repoName,
              branches,
            }),
          ),
          catchError(() => {
            this.store.dispatch(
              getBranchesForRepositoryFailure({
                message: 'Error while fetching branches',
              }),
            );
            return EMPTY;
          }),
        ),
      ),
    ),
  );
}
