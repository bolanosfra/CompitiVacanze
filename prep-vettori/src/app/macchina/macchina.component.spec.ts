import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacchinaComponent } from './macchina.component';

describe('MacchinaComponent', () => {
  let component: MacchinaComponent;
  let fixture: ComponentFixture<MacchinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MacchinaComponent]
    });
    fixture = TestBed.createComponent(MacchinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
