import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountGameComponent } from './count-game.component';

describe('CountGameComponent', () => {
  let component: CountGameComponent;
  let fixture: ComponentFixture<CountGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountGameComponent]
    });
    fixture = TestBed.createComponent(CountGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
