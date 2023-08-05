import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComponenteComponent } from './second-componente.component';

describe('SecondComponenteComponent', () => {
  let component: SecondComponenteComponent;
  let fixture: ComponentFixture<SecondComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondComponenteComponent]
    });
    fixture = TestBed.createComponent(SecondComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
