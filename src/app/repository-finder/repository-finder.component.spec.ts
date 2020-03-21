import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryFinderComponent } from './repository-finder.component';

describe('RepositoryFinderComponent', () => {
  let component: RepositoryFinderComponent;
  let fixture: ComponentFixture<RepositoryFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
