import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesviewComponent } from './companiesview.component';

describe('CompaniesviewComponent', () => {
  let component: CompaniesviewComponent;
  let fixture: ComponentFixture<CompaniesviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
