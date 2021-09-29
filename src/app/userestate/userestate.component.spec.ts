import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserestateComponent } from './userestate.component';

describe('UserestateComponent', () => {
  let component: UserestateComponent;
  let fixture: ComponentFixture<UserestateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserestateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
