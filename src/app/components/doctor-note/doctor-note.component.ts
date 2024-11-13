import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DoctorNote } from './doctor-note.model';
import { CommonModule } from '@angular/common'; // Import CommonModule
@Component({
  selector: 'app-doctor-note',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctor-note.component.html',
  styleUrl: './doctor-note.component.scss'
})
export class DoctorNoteComponent  implements OnInit{
  @Input() patientId: string | null = null; // Input for the patient ID
  @Input() patientName: string | null = null; // Input for the patient ID
  private PatientApiUrl = 'http://localhost:8080/api/patients';
  doctorNotes: DoctorNote[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchDoctorNotes(this.patientId);
  }

  // Method to fetch doctor notes
  fetchDoctorNotes(patientId: string|null): void {
    const apiUrl = this.PatientApiUrl+`/doctor-note/${patientId}`; // Replace with your API endpoint
    this.http.get<DoctorNote[]>(apiUrl).subscribe((notes) => {
      this.doctorNotes = notes;
    });
  }
}
