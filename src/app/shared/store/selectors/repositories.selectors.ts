import { createSelector } from '@ngrx/store';
import { selectSharedState, SharedState } from '../reducers';
import { RepositoriesState } from '../reducers/repositories.reducer';

const getRepositoriesState = createSelector(
  selectSharedState,
  (state: SharedState) => state.repositoriesState,
);

export const getRepositories = createSelector(
  getRepositoriesState,
  (state: RepositoriesState) => state.repositories,
);
