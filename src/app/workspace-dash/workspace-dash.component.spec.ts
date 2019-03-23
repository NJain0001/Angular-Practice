
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceDashComponent } from './workspace-dash.component';

describe('WorkspaceDashComponent', () => {
  let component: WorkspaceDashComponent;
  let fixture: ComponentFixture<WorkspaceDashComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkspaceDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
