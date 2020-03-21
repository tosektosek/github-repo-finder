import { createAction, props } from '@ngrx/store';
import { Repository, Branch } from '../../model/repository.model';

export const getRepositoriesForUserWithoutForks = createAction(
  '[Repositories] get repositories for user',
  props<{ username: string }>(),
);

export const getRepositoriesForUserWithoutForksSuccess = createAction(
  '[Repositories] get repositories for user success',
  props<{ repositories: Repository[] }>(),
);

export const getRepositoriesForUserWithoutForksFailue = createAction(
  '[Repositories] get repositories for user failure',
  props<{ message: string }>(),
);

export const getBranchesForRepository = createAction(
  '[Repositories] get brancher for repositories ',
  props<{ repoName: string }>(),
);

export const getBranchesForRepositorySuccess = createAction(
  '[Repositories] get brancher for repositories success',
  props<{ repoName: string; branches: Branch[] }>(),
);

export const getBranchesForRepositoryFailure = createAction(
  '[Repositories] get brancher for repositories failure',
  props<{ message: string }>(),
);
