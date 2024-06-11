import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private isOpenSubject = new BehaviorSubject<boolean>(false); // Initial state is closed
  isOpen= this.isOpenSubject.asObservable(); // Observable stream of the sidebar state

  constructor() { }

  toggle(): void {
    const currentState = this.isOpenSubject.getValue();
    this.isOpenSubject.next(!currentState);
  }

  // Optional: Method to manually set the sidebar state
  setOpen(isOpen: boolean): void {
    this.isOpenSubject.next(isOpen);
  }
}
