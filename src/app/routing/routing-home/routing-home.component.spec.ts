import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingHomeComponent } from './routing-home.component';

describe('RoutingHomeComponent', () => {
  let component: RoutingHomeComponent;
  let fixture: ComponentFixture<RoutingHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingHomeComponent]
    });
    fixture = TestBed.createComponent(RoutingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
