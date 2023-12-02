import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingServersComponent } from './routing-servers.component';

describe('RoutingServersComponent', () => {
  let component: RoutingServersComponent;
  let fixture: ComponentFixture<RoutingServersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingServersComponent]
    });
    fixture = TestBed.createComponent(RoutingServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
