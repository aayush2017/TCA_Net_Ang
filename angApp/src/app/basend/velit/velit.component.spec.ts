import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelitComponent } from './velit.component';

describe('VelitComponent', () => {
  let component: VelitComponent;
  let fixture: ComponentFixture<VelitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
