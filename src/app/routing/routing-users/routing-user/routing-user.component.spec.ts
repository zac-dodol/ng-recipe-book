import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingUserComponent } from './routing-user.component';

describe('RoutingUserComponent', () => {
  let component: RoutingUserComponent;
  let fixture: ComponentFixture<RoutingUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingUserComponent]
    });
    fixture = TestBed.createComponent(RoutingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
