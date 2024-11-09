import {Component, OnInit} from '@angular/core';
import {Patient} from "../../models/patient";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";

@Component({
  selector: 'app-patients-table',
  standalone: true,
  imports: [
    CardModule,
    TableModule
  ],
  templateUrl: './patients-table.component.html',
  styleUrl: './patients-table.component.scss'
})
export class PatientsTableComponent implements OnInit{

  patients!:Patient[];

  ngOnInit() {
    this.patients = [
      { name: 'Amy Elsner', age: '30',state:'normal' },
      { name: 'Anna Fali', age: '30' ,state:'normal'},
      { name: 'Asiya Javayant', age: '21' ,state:'normal'},
      { name: 'Bernardo Dominic', age: '56' ,state:'normal'},
      { name: 'Elwin Sharvill', age: '78' ,state:'normal'},
      { name: 'Ioni Bowcher', age: '90',state:'normal' },
      { name: 'Ivan Magalhaes', age: '65',state:'normal' },
      { name: 'Onyama Limba', age: '73',state:'normal' },
      { name: 'Stephen Shaw', age: '45',state:'normal' },
      { name: 'Xuxue Feng', age: '66',state:'normal' }
    ];

  }
}
