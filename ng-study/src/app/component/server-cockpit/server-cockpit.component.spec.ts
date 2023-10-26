import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerCockpitComponent } from './server-cockpit.component';

describe('ServerCockpitComponent', () => {
  let component: ServerCockpitComponent;
  let fixture: ComponentFixture<ServerCockpitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerCockpitComponent]
    });
    fixture = TestBed.createComponent(ServerCockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
