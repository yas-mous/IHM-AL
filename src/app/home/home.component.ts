import {Component, OnInit} from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import {CardModule} from "primeng/card";
import {PatientsTableComponent} from "../components/patients-table/patients-table.component";
import {SideBarComponent} from "../components/side-bar/side-bar.component";
import {Button} from "primeng/button";
import {SidebarModule} from "primeng/sidebar";
import {PieComponent} from "../charts/pie/pie.component";
import {LineChartComponent} from "../charts/line-chart/line-chart.component";
import {HttpClientModule} from "@angular/common/http";
import {PatientServiceService} from "../patient-service.service";
import { PatientReportComponent } from "../components/patient-report/patient-report.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableModule, TagModule, IconFieldModule, InputTextModule,
    InputIconModule, MultiSelectModule, DropdownModule, CommonModule, CardModule,
    PatientsTableComponent, SideBarComponent, Button, SidebarModule, PieComponent, LineChartComponent, HttpClientModule, PatientReportComponent],
  providers: [PatientServiceService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {
ngOninit(){
  console.log("heeeeere");
}
selectedPatientId: string | null = null;
selectedPatientName: string | null = null;


onPatientSelect(patient: { patientId: string; patientName: string }) {
  this.selectedPatientId = patient.patientId;
  this.selectedPatientName = patient.patientName;
}


}


