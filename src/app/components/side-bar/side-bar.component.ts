import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [SidebarModule,ButtonModule],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  sidebarVisible: boolean =false;

  showSideBar(){
    this.sidebarVisible=true;
    console.log(this.sidebarVisible);
  }


}
