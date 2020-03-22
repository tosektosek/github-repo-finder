import { createReducer, on } from '@ngrx/store';
import { Repository } from '../../model/repository.model';
import {
  getBranchesForRepositorySuccess,
  getRepositoriesForUserWithoutForksFailue,
  getRepositoriesForUserWithoutForksSuccess,
} from '../actions/repositories.actions';

export interface RepositoriesState {
  repositories: Repository[];
}

export const initialState: RepositoriesState = {
  repositories: [],
};

export const repositoryReducer = createReducer(
  initialState,
  on(getRepositoriesForUserWithoutForksSuccess, (state, { repositories }) => {
    return { ...state, repositories: [...repositories] };
  }),
  on(getBranchesForRepositorySuccess, (state, { repoName, branches }) => {
    const repositoriesCopy = [...state.repositories];
    const updatedRepositories = repositoriesCopy.map(repo =>
      repo.full_name === repoName ? { ...repo, branches } : repo,
    );

    return { ...state, repositories: updatedRepositories };
  }),
  on(getRepositoriesForUserWithoutForksFailue, () => {
    return { repositories: [] };
  }),
);
