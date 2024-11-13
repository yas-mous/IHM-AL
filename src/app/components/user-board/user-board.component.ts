import { Component } from '@angular/core';
import { PatientReportComponent } from "../patient-report/patient-report.component";
import {HttpClientModule} from "@angular/common/http";
import { DoctorNoteComponent } from "../doctor-note/doctor-note.component";@Component({
  selector: 'app-user-board',
  standalone: true,
  imports: [PatientReportComponent, HttpClientModule, DoctorNoteComponent],
  templateUrl: './user-board.component.html',
  styleUrl: './user-board.component.scss'
})
export class UserBoardComponent {
  selectedPatientId: string | null = "6718c33780109a0176fcc9a8";
  selectedPatientName: string | null = "Jean-claude Dubois";
}
