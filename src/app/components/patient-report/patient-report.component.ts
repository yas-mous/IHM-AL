import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // HttpClient for API calls
import { Observable } from 'rxjs';
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {PatientServiceService} from "../../patient-service.service";
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  standalone: true,
  selector: 'app-patient-report',
  templateUrl: './patient-report.component.html',
  imports: [
    CommonModule,
    CardModule,
    TableModule,
    FormsModule  // Add FormsModule here
  ],
  styleUrls: ['./patient-report.component.scss']
})
export class PatientReportComponent implements OnChanges {
  @Input() patientId: string | null = null; // Input for the patient ID
  @Input() patientName: string | null = null; // Input for the patient ID
  @Input() isDoctor: boolean  = false; // Input for the patient ID
  patientReport: { [key: string]: string } = {}; // Dictionary to store key-value pairs
  private DataApiUrl = 'http://localhost:8085/api/patient';
  private PatientApiUrl = 'http://localhost:8080/api/patients';
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


  noteText: string = '';

  submitNote() {
    if (this.noteText.trim()) {
      const payload = { patientId: this.patientId, note: this.noteText };
      console.log(payload);
    this.http.post(this.PatientApiUrl+'/doctor-note/submit', payload).subscribe({
        next: response => {
          console.log('Note submitted:', response);
          this.noteText = ''; // Clear the textarea after submission
        },
        error: err => {
          console.error('Error submitting note:', err);
        }
      });
    } else {
      alert('Please enter a note.');
    }
  }

}
