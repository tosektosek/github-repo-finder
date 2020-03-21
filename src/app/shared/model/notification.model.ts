export interface Notification {
  message: string;
  notificationType: NotificationType;
}

export enum NotificationType {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  INFO = 'INFO',
}
