import { Routes } from '@angular/router';
import {SideBarComponent} from "./components/side-bar/side-bar.component";
import {HomeComponent} from "./home/home.component";
import { UserBoardComponent } from './components/user-board/user-board.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-board', component: UserBoardComponent },
];
