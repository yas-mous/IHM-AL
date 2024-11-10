import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientReportComponent } from './patient-report.component';

describe('PatientReportComponent', () => {
  let component: PatientReportComponent;
  let fixture: ComponentFixture<PatientReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
