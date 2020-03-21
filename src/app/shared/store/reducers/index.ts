import {
  ActionReducerMap,
  MetaReducer,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import { environment } from '../../../../../../projects-list-app/src/environments/environment';
import * as repositoryState from './repositories.reducer';
import * as notificationsState from './notifications.reducer';

export interface SharedState {
  repositoriesState;
  notificationsState;
}

export const initialState: SharedState = {
  repositoriesState: repositoryState.initialState,
  notificationsState: notificationsState.initialState,
};

export const reducers: ActionReducerMap<SharedState> = {
  repositoriesState: repositoryState.repositoryReducer,
  notificationsState: notificationsState.repositoryReducer,
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
