import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RepositoriesEffects } from './repositories.effects';

describe('RepositoriesEffects', () => {
  let actions$: Observable<any>;
  let effects: RepositoriesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RepositoriesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(RepositoriesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
