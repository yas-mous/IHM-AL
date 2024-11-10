import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // HttpClient for API calls
import { Observable } from 'rxjs';
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {PatientServiceService} from "../../patient-service.service";

@Component({
  standalone: true,
  selector: 'app-patient-report',
  templateUrl: './patient-report.component.html',
  imports: [
    CardModule,
    TableModule  ],
  styleUrls: ['./patient-report.component.scss']
})
export class PatientReportComponent implements OnChanges {
  @Input() patientId: string | null = null; // Input for the patient ID
  patientReport: { [key: string]: string } = {}; // Dictionary to store key-value pairs

  constructor(private http: HttpClient) { }

  ngOnChanges(): void {
    // Simulate a fake API call for now (you can replace this with actual API later)
    this.loadPatientData(this.patientId);
    console.log("PatientReportComponent");
    console.log(this.patientId);
  }

  // Simulate loading data from an API
  loadPatientData(id: string |null): void {
    if (id != null) {
      // Replace this with actual HTTP API call if needed
      this.patientReport = {
        'Name': 'John Doe',
        'Age': '45',
        'Diagnosis': 'Hypertension',
        'Treatment': 'Medication'
      };
    } else {
      this.patientReport = {
        'Name': 'Sample Patient',
        'Age': '35',
        'Diagnosis': 'Asthma',
        'Treatment': 'Inhalers'
      };
    }
  }
  // Helper function to convert dictionary to key-value pairs
  getKeyValuePairs(report: { [key: string]: string }) {
    return Object.entries(report).map(([key, value]) => ({ key, value }));
  }

}
