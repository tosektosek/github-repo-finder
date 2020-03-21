import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getRepositoriesForUserWithoutForks,
  getRepositoriesForUserWithoutForksSuccess,
  getBranchesForRepositorySuccess,
  getBranchesForRepository,
} from '../actions/repositories.actions';
import {
  mergeMap,
  catchError,
  switchMap,
  map,
  concatAll,
  combineAll,
  flatMap,
  combineLatest,
  tap,
  delay,
} from 'rxjs/operators';
import { GithubService } from '../../service/github.service';
import { EMPTY } from 'rxjs';
import { Repository } from '../../model/repository.model';
import { SharedState } from '../reducers';
import { Store } from '@ngrx/store';

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
      switchMap(request =>
        this.githubService.getAllReposForUser(request.username).pipe(
          tap(repositories =>
            repositories.forEach(repo => {
              this.store.dispatch(
                getBranchesForRepository({ repoName: repo.full_name }),
              );
            }),
          ),
          map(response => response.filter(repo => !repo.fork)),
          map(repositories =>
            getRepositoriesForUserWithoutForksSuccess({ repositories }),
          ),

          catchError(() => EMPTY),
        ),
      ),
    ),
  );

  getBrancherForRepository$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBranchesForRepository),
      mergeMap(request =>
        this.githubService.getRepoDetails(request.repoName).pipe(
          map(details =>
            getBranchesForRepositorySuccess({ repoName: request.repoName, branches: details }),
          ),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );
}
