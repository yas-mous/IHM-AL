import {Component, OnInit} from '@angular/core';
import {Patients} from "../../models/patients";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {PatientServiceService} from "../../patient-service.service";
import {HttpClientModule} from "@angular/common/http";
import {Patient} from "../../models/patient";

@Component({
  selector: 'app-patients-table',
  standalone: true,
  imports: [
    CardModule,
    TableModule,
    HttpClientModule
  ],
  providers: [PatientServiceService],
  templateUrl: './patients-table.component.html',
  styleUrl: './patients-table.component.scss'
})
export class PatientsTableComponent implements OnInit{

  constructor(private patientService: PatientServiceService) {}
  patients!:Patients[];
  data:any;
  patient!:Patient[];
  ngOnInit(): void {
    console.log("heeeeeeeeeeeeeeere");
    this.patientService.getHome().subscribe(response => {
      this.data = response;
      console.log(this.data);
      console.log("start calling getPatientMethode");
    });
    console.log("start calling getPatientMethode");
    this.patientService.getPatients().subscribe(response => {
      this.patient = response;
      console.log(this.patient);
    });
    console.log("start ");

    this.patients = [
      { name: 'Amy Elsner', birthDate: '30',severity:'normal' },
      { name: 'Anna Fali', birthDate: '30' ,severity:'normal'},
      { name: 'Asiya Javayant', birthDate: '21' ,severity:'normal'},
      { name: 'Bernardo Dominic', birthDate: '56' ,severity:'normal'},
      { name: 'Elwin Sharvill', birthDate: '78' ,severity:'normal'},
      { name: 'Ioni Bowcher', birthDate: '90',severity:'normal' },
      { name: 'Ivan Magalhaes', birthDate: '65',severity:'normal' },
      { name: 'Onyama Limba', birthDate: '73',severity:'normal' },
      { name: 'Stephen Shaw', birthDate: '45',severity:'normal' },
      { name: 'Xuxue Feng', birthDate: '66',severity:'normal' }
    ];
  }

}
