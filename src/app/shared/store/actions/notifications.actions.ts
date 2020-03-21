import { createAction, props } from '@ngrx/store';
import { NotificationType } from '../../model/notification.model';

export const displayMessage = createAction(
  '[Notifications] display message',
  props<{ notificationType: NotificationType; message: string }>(),
);

export const hideNotification = createAction(
  '[Notifications] hide notification',
);
