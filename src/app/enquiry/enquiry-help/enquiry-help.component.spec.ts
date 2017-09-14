import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryHelpComponent } from './enquiry-help.component';

describe('EnquiryHelpComponent', () => {
  let component: EnquiryHelpComponent;
  let fixture: ComponentFixture<EnquiryHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EnquiryHelpComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
