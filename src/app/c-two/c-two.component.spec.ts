import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTwoComponent } from './c-two.component';

describe('CTwoComponent', () => {
  let component: CTwoComponent;
  let fixture: ComponentFixture<CTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
