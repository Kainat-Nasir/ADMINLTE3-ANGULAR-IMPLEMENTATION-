import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table'  
import {AfterViewInit,ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-dashboard-v3',
  templateUrl: './dashboard-v3.component.html',
  styleUrls: ['./dashboard-v3.component.css']
})
export class DashboardV3Component implements OnInit {


displayedColumns: string[] = ['Name', 'Username', 'Email', 'Phone','website'];
dataSource:any;
@ViewChild(MatPaginator) paginator: MatPaginator;
searchText: any;





  constructor(private http:HttpClient){}
 ngOnInit(): void {
  this.loadApi();   
  this.applyFilter('');
 }

 ngAfterViewInit(){
  this.dataSource.paginator = this.paginator;
 }

 loadApi(){
  this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
    this.dataSource = new MatTableDataSource(res);
    this.dataSource.paginator = this.paginator;
  })
 }
 applyFilter(filterValue: any) {
  this.dataSource.filter = filterValue.trim();
 }


}
