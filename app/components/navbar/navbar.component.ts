import { Component } from '@angular/core';
import { SidebarService } from '../../sidebar.service';
import { AuthService } from '../../auth.service'; // Add this line

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private sidebarService: SidebarService, private authService: AuthService) {} // Update constructor

  toggleSidebar() {
    this.sidebarService.toggle();
  }

  logout() { // Add this method
    this.authService.logout();
  }
}
