import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardV1Component } from './components/dashboard/dashboard-v1/dashboard-v1.component';
import { DashboardV2Component } from './components/dashboard/dashboard-v2/dashboard-v2.component';
import { DashboardV3Component } from './components/dashboard/dashboard-v3/dashboard-v3.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table' 
import { MatSortModule } from '@angular/material/sort';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { SignupComponent } from './components/signup/signup.component';

 import { LoginComponent } from '../app/components/login/login.component';
 







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    DashboardV1Component,
    DashboardV2Component,
    DashboardV3Component,
    SignupComponent,
    LoginComponent

  

 
    
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule ,
    MatSortModule,
    MatPaginatorModule,  
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
