import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "./models/patient";

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  private apiUrl = 'http://localhost:8085/api/patients';

  constructor(private http: HttpClient) {}

 /*methode to test connection with the api*/
  getHome(): Observable<any> {
    return this.http.get(`${this.apiUrl}/home`,{ responseType: 'text' });
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }


}
