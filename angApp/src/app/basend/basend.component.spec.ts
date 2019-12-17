import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasendComponent } from './basend.component';

describe('BasendComponent', () => {
  let component: BasendComponent;
  let fixture: ComponentFixture<BasendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
