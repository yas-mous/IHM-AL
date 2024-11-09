import { Routes } from '@angular/router';
import {SideBarComponent} from "./components/side-bar/side-bar.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
];
