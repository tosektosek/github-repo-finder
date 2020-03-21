import { Repository } from '../../model/repository.model';
import { createReducer, on } from '@ngrx/store';
import {
  getRepositoriesForUserWithoutForksSuccess,
  getBranchesForRepositorySuccess,
} from '../actions/repositories.actions';
import { Notification } from '../../model/notification.model';
import {
  displayMessage,
  hideNotification,
} from '../actions/notifications.actions';

export interface NotificationsState {
  notification: Notification;
}

export const initialState: NotificationsState = {
  notification: null,
};

export const repositoryReducer = createReducer(
  initialState,
  on(displayMessage, (state, { notificationType, message }) => {
    return { ...state, notification: { notificationType, message } };
  }),
  on(hideNotification, state => {
    return { ...state, notification: null };
  }),
);
