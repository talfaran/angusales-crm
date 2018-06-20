import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomersViewComponent } from './cutomers-view.component';

describe('CutomersViewComponent', () => {
  let component: CutomersViewComponent;
  let fixture: ComponentFixture<CutomersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutomersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
