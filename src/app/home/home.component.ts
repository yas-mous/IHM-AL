import {Component, OnInit} from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import {Patient} from "../models/patient";
import {CardModule} from "primeng/card";
import {PatientsTableComponent} from "../components/patients-table/patients-table.component";
import {SideBarComponent} from "../components/side-bar/side-bar.component";
import {Button} from "primeng/button";
import {SidebarModule} from "primeng/sidebar";
import {PieComponent} from "../charts/pie/pie.component";
import {LineChartComponent} from "../charts/line-chart/line-chart.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableModule, TagModule, IconFieldModule, InputTextModule,
    InputIconModule, MultiSelectModule, DropdownModule, CommonModule, CardModule,
    PatientsTableComponent, SideBarComponent, Button, SidebarModule, PieComponent, LineChartComponent,],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {




}


