import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingPageComponent } from './routing-page.component';

describe('RoutingPageComponent', () => {
  let component: RoutingPageComponent;
  let fixture: ComponentFixture<RoutingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingPageComponent]
    });
    fixture = TestBed.createComponent(RoutingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
