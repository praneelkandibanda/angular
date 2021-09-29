import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateImageComponent } from './estate-image.component';

describe('EstateImageComponent', () => {
  let component: EstateImageComponent;
  let fixture: ComponentFixture<EstateImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstateImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
