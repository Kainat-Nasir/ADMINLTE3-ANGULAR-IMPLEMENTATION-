import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../sidebar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isOpen = false;


  constructor(private sidebarService: SidebarService,private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.sidebarService.isOpen.subscribe((isOpen: boolean) => {
      this.isOpen = isOpen;
      
    });
  }

  toggleSidebar() {
    this.sidebarService.toggle();
  }
  getSelectedRoute(): string {
    return this.activatedRoute.snapshot.url.join('/');
  }
}
