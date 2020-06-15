import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COneComponent } from './c-one.component';

describe('COneComponent', () => {
  let component: COneComponent;
  let fixture: ComponentFixture<COneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
