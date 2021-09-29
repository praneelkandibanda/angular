import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserestatecardComponent } from './userestatecard.component';

describe('UserestatecardComponent', () => {
  let component: UserestatecardComponent;
  let fixture: ComponentFixture<UserestatecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserestatecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserestatecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
