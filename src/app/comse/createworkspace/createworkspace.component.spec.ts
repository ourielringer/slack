import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateworkspaceComponent } from './createworkspace.component';

describe('CreateworkspaceComponent', () => {
  let component: CreateworkspaceComponent;
  let fixture: ComponentFixture<CreateworkspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateworkspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateworkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
