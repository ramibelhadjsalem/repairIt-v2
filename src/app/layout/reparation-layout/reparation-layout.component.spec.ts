import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparationLayoutComponent } from './reparation-layout.component';

describe('ReparationLayoutComponent', () => {
  let component: ReparationLayoutComponent;
  let fixture: ComponentFixture<ReparationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReparationLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReparationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
