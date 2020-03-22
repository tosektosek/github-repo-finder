import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map } from 'rxjs/operators';
import { NotificationType } from '../../model/notification.model';
import {
  displayMessage,
  hideNotification,
} from '../actions/notifications.actions';
import {
  getBranchesForRepositoryFailure,
  getRepositoriesForUserWithoutForksFailue,
} from '../actions/repositories.actions';

@Injectable()
export class NotificationsEffects {
  constructor(private actions$: Actions) {}

  displayError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        getBranchesForRepositoryFailure,
        getRepositoriesForUserWithoutForksFailue,
      ),
      map(({ message }) =>
        displayMessage({
          notificationType: NotificationType.ERROR,
          message,
        }),
      ),
    ),
  );

  hideNotification$ = createEffect(() =>
    this.actions$.pipe(
      ofType(displayMessage),
      delay(3000),
      map(() => hideNotification()),
    ),
  );
}
