import {
  ActionReducerMap,
  MetaReducer,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import { environment } from '../../../../../../projects-list-app/src/environments/environment';
import * as repositoryState from './repositories.reducer';

export interface SharedState {
  repositoriesState;
}

export const initialState: SharedState = {
  repositoriesState: repositoryState.initialState,
};

export const reducers: ActionReducerMap<SharedState> = {
  repositoriesState: repositoryState.repositoryReducer,
};

export const getSharedFeatureState = createFeatureSelector<SharedState>(
  'shared',
);
export const selectSharedState = createSelector(
  getSharedFeatureState,
  (state: SharedState) => {
    return state;
  },
);

