import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-task';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { //for localstorage
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }
}
