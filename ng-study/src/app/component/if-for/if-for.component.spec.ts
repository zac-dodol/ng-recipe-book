import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfForComponent } from './if-for.component';

describe('IfForComponent', () => {
  let component: IfForComponent;
  let fixture: ComponentFixture<IfForComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IfForComponent]
    });
    fixture = TestBed.createComponent(IfForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
