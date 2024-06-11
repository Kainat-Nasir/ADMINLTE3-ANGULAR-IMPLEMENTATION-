import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component'; 
import { DashboardV1Component} from '../app/components/dashboard/dashboard-v1/dashboard-v1.component'; 
import { DashboardV2Component} from '../app/components/dashboard/dashboard-v2/dashboard-v2.component';
import { DashboardV3Component} from '../app/components/dashboard/dashboard-v3/dashboard-v3.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  // { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    
  },
  {
    path: 'dashboard/v1',
    component: DashboardV1Component,
    
  },
  {
    path: 'dashboard/v2',
    component: DashboardV2Component,
   
  },
  {
    path: 'dashboard/v3',
    component: DashboardV3Component,
  
  },
  { path: '',
    component: DashboardV3Component,
  },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
