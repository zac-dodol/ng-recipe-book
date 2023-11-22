import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPageInputFormComponent } from './first-page-input-form.component';

describe('FirstPageInputFormComponent', () => {
  let component: FirstPageInputFormComponent;
  let fixture: ComponentFixture<FirstPageInputFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstPageInputFormComponent]
    });
    fixture = TestBed.createComponent(FirstPageInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
