import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdComponentComponent } from './third-component.component';

describe('ThirdComponentComponent', () => {
  let component: ThirdComponentComponent;
  let fixture: ComponentFixture<ThirdComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdComponentComponent]
    });
    fixture = TestBed.createComponent(ThirdComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
