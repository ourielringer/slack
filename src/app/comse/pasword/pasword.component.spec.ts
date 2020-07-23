import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaswordComponent } from './pasword.component';

describe('PaswordComponent', () => {
  let component: PaswordComponent;
  let fixture: ComponentFixture<PaswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
