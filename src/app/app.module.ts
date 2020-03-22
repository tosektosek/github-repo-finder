import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoryFinderComponent } from './repository-finder/repository-finder.component';
import { RepositoryListItemComponent } from './repository-list/repository-list-item/repository-list-item.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { RepositoriesEffects } from './shared/store/effects/repositories.effects';
import { reducers } from './shared/store/reducers';
import { NotificationsEffects } from './shared/store/effects/notifications.effects';
import { SharedModule } from './shared/shared.module';
import { NotificationsComponent } from './notifications/notifications.component';
import { TokenInterceptor } from './shared/interceptors/token-interceptor';

export const FEATURE_REDUCER = new InjectionToken<any>('Root Reducer', {
  factory: () => reducers,
});
@NgModule({
  declarations: [
    AppComponent,
    RepositoryListComponent,
    RepositoryListItemComponent,
    RepositoryFinderComponent,
    NotificationsComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: [],
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
      },
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([RepositoriesEffects, NotificationsEffects]),
    StoreModule.forFeature('shared', FEATURE_REDUCER),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
