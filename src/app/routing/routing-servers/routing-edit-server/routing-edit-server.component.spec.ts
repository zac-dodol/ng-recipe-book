import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingEditServerComponent } from './routing-edit-server.component';

describe('RoutingEditServerComponent', () => {
  let component: RoutingEditServerComponent;
  let fixture: ComponentFixture<RoutingEditServerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingEditServerComponent]
    });
    fixture = TestBed.createComponent(RoutingEditServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
