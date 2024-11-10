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
  private DataApiUrl = 'http://localhost:8085/api/patient';
  constructor(private http: HttpClient) { }

  ngOnChanges(): void {
    // Simulate a fake API call for now (you can replace this with actual API later)
    this.loadPatientData(this.patientId);
    console.log("PatientReportComponent");
    console.log(this.patientId);
  }

  // Simulate loading data from an API

  loadPatientData(id: string | null): void {
    if (id) {
      console.log(`${this.DataApiUrl}/${id}/data`);
      this.http.get<any>(`${this.DataApiUrl}/${id}/data`).subscribe(
        (data) => {
          this.patientReport = this.transformToDictionary(data);
          console.log(this.patientReport)
        },
        (error) => {
          console.error('Error fetching patient data', error);
        }
      );
    }
  }

  private transformToDictionary(data: any): { [key: string]: any } {
    const result: { [key: string]: any } = {};

    // Directly add each key-value from the data object to the dictionary
    Object.keys(data).forEach((key) => {
      if (Array.isArray(data[key]) && data[key].length && typeof data[key][0] === 'object') {
        // For arrays with objects, add the first element's keys as part of the dictionary
        data[key].forEach((item: any, index: number) => {
          Object.keys(item).forEach((subKey) => {
            if(subKey != "patientId" && subKey != "id")
              result[`${key}.${subKey}`] = item[subKey];
          });
        });
      } else {
        result[key] = data[key];
      }
    });

    return result;
  }
  // Helper function to convert dictionary to key-value pairs
  getKeyValuePairs(report: { [key: string]: string }) {
    return Object.entries(report).map(([key, value]) => ({ key, value }));
  }

}
