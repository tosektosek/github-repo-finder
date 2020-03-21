import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SharedState } from '../shared/store/reducers';
import { getCurrentNotification } from '../shared/store/selectors/notifications.selector';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent {
  notification$ = this.store.select(getCurrentNotification);

  constructor(private store: Store<SharedState>) {}
}
