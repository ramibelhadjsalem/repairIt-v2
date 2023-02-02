import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartReparateurComponent } from './cart-reparateur.component';

describe('CartReparateurComponent', () => {
  let component: CartReparateurComponent;
  let fixture: ComponentFixture<CartReparateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartReparateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartReparateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
