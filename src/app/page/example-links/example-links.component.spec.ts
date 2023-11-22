import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleLinksComponent } from './example-links.component';

describe('ExampleLinksComponent', () => {
  let component: ExampleLinksComponent;
  let fixture: ComponentFixture<ExampleLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleLinksComponent]
    });
    fixture = TestBed.createComponent(ExampleLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
