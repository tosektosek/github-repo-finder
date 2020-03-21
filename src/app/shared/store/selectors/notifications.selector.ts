import { createSelector } from '@ngrx/store';
import { selectSharedState, SharedState } from '../reducers';
import { RepositoriesState } from '../reducers/repositories.reducer';
import { NotificationsState } from '../reducers/notifications.reducer';

const getNotificationsState = createSelector(
  selectSharedState,
  (state: SharedState) => state.notificationsState,
);

export const getCurrentNotification = createSelector(
  getNotificationsState,
  (state: NotificationsState) => state.notification,
);
